import { inject, Injectable, signal, computed } from '@angular/core';
import { Season } from '../domain/model/season.entity';
import { SeasonStatus } from '../domain/model/season-status.enum';
import { SeasonService } from '../infrastructure/services/season.service';
import { SeasonResponse } from '../infrastructure/responses/season.response';
import { SeasonAssembler } from '../infrastructure/assemblers/season.assembler';

@Injectable({ providedIn: 'root' })
export class SeasonStore {
  private readonly seasonService = inject(SeasonService);
  private assembler = new SeasonAssembler();
  readonly seasons = signal<Season[]>([]);
  readonly selectedSeasonId = signal<number | null>(null);
  readonly isLoading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  readonly seasonTableData = computed(() =>
    this.seasons().map((s) => ({
      id: s.getId(),
      fieldId: s.getFieldId(),
      cropId: s.getCropId(),
      cropName: s.getCropName(),
      status: s.getStatus(),
      startedAt: s.getStartedAt(),
      endedAt: s.getEndedAt(),
    }))
  );

  loadSeasonsByField(fieldId: number): void {
    this.isLoading.set(true);
    this.error.set(null);
    this.seasonService.getByField(fieldId).subscribe({
      next: (responses: SeasonResponse[]) => {
        const entities = responses.map((r) => this.assembler.toEntityFromResponse(r));
        this.seasons.set(entities);
      },
      error: (err) => {
        console.error(err);
        this.error.set('No se pudieron cargar las temporadas');
        this.isLoading.set(false);
      },
      complete: () => this.isLoading.set(false),
    });
  }

  selectSeason(id: number): void {
    this.selectedSeasonId.set(id);
  }

  getSeasonById(id: number): Season | undefined {
    return this.seasons().find((s) => s.getId() === id);
  }

  addSeason(entity: Season): void {
    this.seasons.update((list) => [...list, entity]);
  }

  updateSeason(entity: Season): void {
    this.seasons.update((list) => list.map((s) => (s.getId() === entity.getId() ? entity : s)));
  }

  assignCropToSeason(seasonId: number, cropId: number): void {
    this.seasonService.assignCrop(seasonId, cropId).subscribe({
      next: (res) => this.updateSeason(this.assembler.toEntityFromResponse(res)),
      error: (err) => console.error(err),
    });
  }

  updateSeasonStatus(seasonId: number, status: SeasonStatus): void {
    this.seasonService.updateStatus(seasonId, status).subscribe({
      next: (res) => {
        const updated = this.assembler.toEntityFromResponse(res);
        this.updateSeason(updated);
      },
      error: (err) => console.error(err),
    });
  }

  endSeason(seasonId: number): void {
    this.seasonService.endSeason(seasonId).subscribe({
      next: (res) => {
        const updated = this.assembler.toEntityFromResponse(res);
        this.updateSeason(updated);
      },
      error: (err) => console.error(err),
    });
  }
}
