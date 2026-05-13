import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class Fundo extends BaseEntity {
  private name: string;
  private organizationId: number;
  private location: string;
  private totalArea: number;

  constructor(id: number, name: string, organizationId: number, location: string, totalArea: number) {
    super(id);
    this.name = name;
    this.organizationId = organizationId;
    this.location = location;
    this.totalArea = totalArea;
  }

  getName(): string { return this.name; }
  getOrganizationId(): number { return this.organizationId; }
  getLocation(): string { return this.location; }
  getTotalArea(): number { return this.totalArea; }
}
