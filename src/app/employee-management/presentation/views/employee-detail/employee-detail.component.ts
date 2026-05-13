import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Employee } from '../../../domain/model/entities/employee.entity';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css',
})
export class EmployeeDetailComponent {
  @Input() employee!: Employee;

  showRole(): string {
    return this.employee.getRole();
  }

  showStatus(): string {
    return this.employee.getStatus();
  }
}
