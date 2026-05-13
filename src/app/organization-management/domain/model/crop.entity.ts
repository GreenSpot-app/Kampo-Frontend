import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class Crop extends BaseEntity {
  private name: string;
  private scientificName: string;
  private variety: string;
  private growthCycle: number;

  constructor(
    id: number,
    name: string,
    scientificName: string,
    variety: string,
    growthCycle: number
  ) {
    super(id);
    this.name = name;
    this.scientificName = scientificName;
    this.variety = variety;
    this.growthCycle = growthCycle;
  }

  getName(): string { return this.name; }
  getScientificName(): string { return this.scientificName; }
  getVariety(): string { return this.variety; }
  getGrowthCycle(): number { return this.growthCycle; }
}
