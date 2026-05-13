import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { SeasonStore } from '../../../application/season.store';
import { Season } from '../../../domain/model/season.entity';

@Component({
  selector: 'app-season-detail',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, DatePipe],
  templateUrl: './season-detail.html',
})
export class SeasonDetailComponent implements OnInit {
  public store = inject(SeasonStore);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  season: Season | undefined;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.season = this.store.getSeasonById(id);
  }

  showSeasonStatus(): string {
    return this.season?.getStatus() ?? '-';
  }

  showCropName(): string {
    return this.season?.getCropName() ?? '-';
  }

  back(): void {
    const fid = this.season?.getFieldId() ?? 1;
    this.router.navigate(['/season-management'], { queryParams: { fieldId: fid } });
  }
}
