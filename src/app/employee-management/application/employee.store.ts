import { Injectable, signal } from '@angular/core';
import { EmployeeApi } from '../infrastructure/employee.api';
import { Employee } from '../domain/model/entities/employee.entity';

@Injectable({ providedIn: 'root' })
export class EmployeeStore {
  private _employees = signal<Employee[]>([]);
  private _selectedEmployee = signal<Employee | null>(null);
  private _isLoading = signal<boolean>(false);

  employees = this._employees.asReadonly();
  selectedEmployee = this._selectedEmployee.asReadonly();
  isLoading = this._isLoading.asReadonly();

  constructor(private employeeApi: EmployeeApi) {}

  getEmployees(): void {
    this._isLoading.set(true);
    this.employeeApi.getEmployees().subscribe({
      next: (employees) => {
        this._employees.set(employees);
        this._isLoading.set(false);
      },
      error: () => this._isLoading.set(false),
    });
  }

  createEmployee(employee: Employee): void {
    this.employeeApi.createEmployee(employee).subscribe({
      next: (created) => {
        this._employees.update((list) => [...list, created]);
      },
    });
  }

  modifyEmployee(employee: Employee): void {
    this.employeeApi.modifyEmployee(employee).subscribe({
      next: (updated) => {
        this._employees.update((list) =>
          list.map((e) => (e.getId() === updated.getId() ? updated : e)),
        );
      },
    });
  }

  deleteEmployee(employeeId: number): void {
    this.employeeApi.deleteEmployee(employeeId).subscribe({
      next: () => {
        this._employees.update((list) => list.filter((e) => e.getId() !== employeeId));
      },
    });
  }

  selectEmployee(employeeId: number): void {
    const found = this._employees().find((e) => e.getId() === employeeId) ?? null;
    this._selectedEmployee.set(found);
  }
}
