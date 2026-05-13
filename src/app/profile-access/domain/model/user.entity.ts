import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class User extends BaseEntity {
  private lastName: string;
  private firstName: string;
  private createdAt: Date;
  private email: string;
  private phone: string;

  constructor(
    id: number,
    lastName: string,
    firstName: string,
    createdAt: Date,
    email: string,
    phone: string
  ) {
    super(id);
    this.lastName = lastName;
    this.firstName = firstName;
    this.createdAt = createdAt;
    this.email = email;
    this.phone = phone;
  }

  getLastName(): string { return this.lastName; }
  getFirstName(): string { return this.firstName; }
  getCreatedAt(): Date { return this.createdAt; }
  getEmail(): string { return this.email; }
  getPhone(): string { return this.phone; }
}
