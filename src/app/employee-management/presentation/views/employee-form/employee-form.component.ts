import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from '../../../domain/model/entities/employee.entity';
import { EmployeeRole } from '../../../domain/model/enums/employee-role.enum';
import { EmployeeStatus } from '../../../domain/model/enums/employee-status.enum';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee: Employee | null = null;
  @Output() formSubmit = new EventEmitter<Employee>();

  form!: FormGroup;
  roles = Object.values(EmployeeRole);
  statuses = Object.values(EmployeeStatus);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.employee?.getName() ?? '', Validators.required],
      email: [this.employee?.getEmail() ?? '', [Validators.required, Validators.email]],
      role: [this.employee?.getRole() ?? '', Validators.required],
      fieldId: [this.employee?.getFieldId() ?? '', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const employee = new Employee(
        this.employee?.getId() ?? 0,
        this.form.value.name,
        this.form.value.email,
        this.form.value.role,
        this.employee?.getStatus() ?? EmployeeStatus.ACTIVE,
        this.form.value.fieldId,
      );
      this.formSubmit.emit(employee);
    }
  }
}
