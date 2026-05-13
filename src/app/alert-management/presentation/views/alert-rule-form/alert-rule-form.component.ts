import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { AlertStore } from '../../../application/alert.store';

@Component({
  selector: 'app-alert-rule-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './alert-rule-form.component.html',
  styleUrl: './alert-rule-form.component.css',
})
export class AlertRuleFormComponent {
  @Output() formClose = new EventEmitter<void>();

  form: FormGroup;

  readingTypes = ['TEMPERATURE', 'HUMIDITY', 'PH'];
  conditionOperators = ['GREATER_THAN', 'LESS_THAN', 'EQUAL'];
  severityLevels = ['LOW', 'MEDIUM', 'HIGH'];

  constructor(
    private fb: FormBuilder,
    private store: AlertStore,
  ) {
    this.form = this.fb.group({
      readingType: ['', Validators.required],
      conditionOperator: ['', Validators.required],
      severity: ['', Validators.required],
      fieldsId: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.store.sendAlert({
        message: `Alert for ${this.form.value.readingType}`,
        priority: this.form.value.severity,
        fieldsId: this.form.value.fieldsId,
        alertRulesId: 0,
      });
      this.formClose.emit();
    }
  }

  onCancel(): void {
    this.formClose.emit();
  }
}
