import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Employee } from '../../../domain/model/entities/employee.entity';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  @Input() employees: Employee[] = [];
  @Input() isLoading: boolean = false;
  @Output() selectEmployee = new EventEmitter<number>();
  @Output() deleteEmployee = new EventEmitter<number>();

  displayedColumns = ['name', 'email', 'role', 'status', 'actions'];

  onSelect(id: number): void {
    this.selectEmployee.emit(id);
  }

  onDelete(id: number): void {
    this.deleteEmployee.emit(id);
  }
}
