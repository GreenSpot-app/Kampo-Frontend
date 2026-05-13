import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SeasonStore } from '../../../application/season.store';
import { Season } from '../../../domain/model/season.entity';
import { SeasonStatus } from '../../../domain/model/season-status.enum';

@Component({
  selector: 'app-season-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './season-form.html',
})
export class SeasonFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  public store = inject(SeasonStore);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  readonly statusOptions = Object.values(SeasonStatus);

  form: FormGroup = this.fb.group({
    id: [0],
    fieldId: [1, [Validators.required, Validators.min(1)]],
    cropId: [0, [Validators.required, Validators.min(0)]],
    cropName: ['', Validators.required],
    status: [SeasonStatus.PLANTING, Validators.required],
    startedAt: ['', Validators.required],
  });

  isEdit = false;

  ngOnInit(): void {
    const fieldIdParam = this.route.snapshot.queryParamMap.get('fieldId');
    if (fieldIdParam) {
      this.form.patchValue({ fieldId: Number(fieldIdParam) });
    }

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      const season = this.store.getSeasonById(+id);
      if (season) {
        const start = season.getStartedAt();
        const startStr = start.toISOString().slice(0, 10);
        this.form.patchValue({
          id: season.getId(),
          fieldId: season.getFieldId(),
          cropId: season.getCropId(),
          cropName: season.getCropName(),
          status: season.getStatus(),
          startedAt: startStr,
        });
      }
    }
  }

  save(): void {
    if (this.form.invalid) return;
    const val = this.form.value;
    const startedAt = new Date(val.startedAt);
    const entity = new Season(
      val.id,
      val.fieldId,
      val.cropId,
      val.cropName,
      val.status as SeasonStatus,
      startedAt,
      null
    );

    if (this.isEdit) {
      this.store.updateSeason(entity);
    } else {
      this.store.addSeason(entity);
    }
    this.router.navigate(['/season-management'], {
      queryParams: { fieldId: val.fieldId },
    });
  }

  cancel(): void {
    const fieldId = this.form.get('fieldId')?.value ?? 1;
    this.router.navigate(['/season-management'], {
      queryParams: { fieldId },
    });
  }
}
