import { Employee } from '../../domain/model/entities/employee.entity';
import { EmployeeRole } from '../../domain/model/enums/employee-role.enum';
import { EmployeeStatus } from '../../domain/model/enums/employee-status.enum';
import { EmployeeResponse } from '../responses/employee.response';
import { EmployeeResource } from '../responses/employee.resource';

export class EmployeeAssembler {

  static toEntityFromResponse(response: EmployeeResponse): Employee {
    return new Employee(
      response.id,
      response.name,
      response.email,
      response.role as EmployeeRole,
      response.status as EmployeeStatus,
      response.fieldId
    );
  }

  static toResourceFromEntity(entity: Employee): EmployeeResource {
    return {
      name: entity.getName(),
      email: entity.getEmail(),
      role: entity.getRole(),
      fieldId: entity.getFieldId()
    };
  }
}
