import { Injectable } from '@angular/core';
import { BaseAssembler } from '../../../shared/infrastructure/base-assembler';
import { EmployeeResponse } from '../responses/employee.response';
import { EmployeeResource } from '../responses/employee.resource';
import { Employee } from '../../domain/model/entities/employee.entity';

@Injectable({ providedIn: 'root' })
export class EmployeeAssembler extends BaseAssembler<Employee, EmployeeResponse> {

  toEntityFromResponse(response: EmployeeResponse): Employee {
    return new Employee(
      response.id,
      response.name,
      response.email,
      response.role,
      response.status,
      response.fieldId
    );
  }

  toResourceFromEntity(entity: Employee): EmployeeResource {
    return {
      name: entity.getName(),
      email: entity.getEmail(),
      role: entity.getRole(),
      fieldId: entity.getFieldId()
    };
  }
}
