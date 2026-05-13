import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class Organization extends BaseEntity {
  private name: string;
  private ruc: string;
  private address: string;
  private phone: string;
  private email: string;

  constructor(id: number, name: string, ruc: string, address: string, phone: string, email: string) {
    super(id);
    this.name = name;
    this.ruc = ruc;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

  getName(): string { return this.name; }
  getRuc(): string { return this.ruc; }
  getAddress(): string { return this.address; }
  getPhone(): string { return this.phone; }
  getEmail(): string { return this.email; }
}
