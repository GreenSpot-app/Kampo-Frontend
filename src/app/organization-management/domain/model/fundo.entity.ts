import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class Fundo extends BaseEntity {
  private name: string;
  private organizationId: number;
  private latitude: number;
  private longitude: number;

  constructor(id: number, name: string, organizationId: number, latitude: number, longitude: number) {
    super(id);
    this.name = name;
    this.organizationId = organizationId;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getName(): string { return this.name; }
  getOrganizationId(): number { return this.organizationId; }
  getLatitude(): number { return this.latitude; }
  getLongitude(): number { return this.longitude; }
}
