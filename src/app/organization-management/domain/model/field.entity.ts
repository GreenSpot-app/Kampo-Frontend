import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class Field extends BaseEntity {
  private name: string;
  private fundoId: number;
  private area: number;
  private soilType: string;
  private irrigationType: string;

  constructor(
    id: number,
    name: string,
    fundoId: number,
    area: number,
    soilType: string,
    irrigationType: string
  ) {
    super(id);
    this.name = name;
    this.fundoId = fundoId;
    this.area = area;
    this.soilType = soilType;
    this.irrigationType = irrigationType;
  }

  getName(): string { return this.name; }
  getFundoId(): number { return this.fundoId; }
  getArea(): number { return this.area; }
  getSoilType(): string { return this.soilType; }
  getIrrigationType(): string { return this.irrigationType; }
}
