import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Employee } from '../domain/model/entities/employee.entity';
import { EmployeeAssembler } from './assemblers/employee.assembler';
import { EmployeeResource } from './responses/employee.resource';
import { EmployeeResponse } from './responses/employee.response';

@Injectable({ providedIn: 'root' })
export class EmployeeApi {
  private endpoint = `${environment.apiBaseUrl}/employees`;

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<EmployeeResponse[]>(this.endpoint).pipe(
      map(responses => responses.map(r => EmployeeAssembler.toEntityFromResponse(r)))
    );
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const resource: EmployeeResource = EmployeeAssembler.toResourceFromEntity(employee);
    return this.http.post<EmployeeResponse>(this.endpoint, resource).pipe(
      map(r => EmployeeAssembler.toEntityFromResponse(r))
    );
  }

  modifyEmployee(employee: Employee): Observable<Employee> {
    const resource: EmployeeResource = EmployeeAssembler.toResourceFromEntity(employee);
    return this.http.put<EmployeeResponse>(`${this.endpoint}/${employee.getId()}`, resource).pipe(
      map(r => EmployeeAssembler.toEntityFromResponse(r))
    );
  }

  deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${employeeId}`);
  }
}
