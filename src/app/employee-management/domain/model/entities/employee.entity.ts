import { BaseEntity } from '../../../../shared/infrastructure/base-entity';

export class Employee extends BaseEntity {
  private name: string;
  private email: string;
  private role: string;
  private status: string;
  private fieldId: number;

  constructor(
    id: number,
    name: string,
    email: string,
    role: string,
    status: string,
    fieldId: number
  ) {
    super(id);
    this.name = name;
    this.email = email;
    this.role = role;
    this.status = status;
    this.fieldId = fieldId;
  }

  getName(): string { return this.name; }
  getEmail(): string { return this.email; }
  getRole(): string { return this.role; }
  getStatus(): string { return this.status; }
  getFieldId(): number { return this.fieldId; }

  setName(name: string): void { this.name = name; }
  setEmail(email: string): void { this.email = email; }
  setRole(role: string): void { this.role = role; }
}
