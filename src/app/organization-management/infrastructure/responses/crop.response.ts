export class CropResponse {
  id: number;
  name: string;
  scientificName: string;
  variety: string;
  growthCycle: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.scientificName = '';
    this.variety = '';
    this.growthCycle = 0;
  }
}
