import { EmployeeRole } from '../enums/employee-role.enum'
import { EmployeeStatus } from '../enums/employee-status.enum';

export class Employee {
  private id: number;
  private name: string;
  private email: string;
  private role: EmployeeRole;
  private status: EmployeeStatus;
  private fieldId: number;

  constructor(
    id: number,
    name: string,
    email: string,
    role: EmployeeRole,
    status: EmployeeStatus,
    fieldId: number
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.status = status;
    this.fieldId = fieldId;
  }

  getId(): number { return this.id; }
  getName(): string { return this.name; }
  getEmail(): string { return this.email; }
  getRole(): EmployeeRole { return this.role; }
  getStatus(): EmployeeStatus { return this.status; }
  getFieldId(): number { return this.fieldId; }

  setName(name: string): void { this.name = name; }
  setEmail(email: string): void { this.email = email; }
  setRole(role: EmployeeRole): void { this.role = role; }
}
