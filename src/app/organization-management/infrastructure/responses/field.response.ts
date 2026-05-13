export class FieldResponse {
  id: number;
  name: string;
  fundoId: number;
  area: number;
  soilType: string;
  irrigationType: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.fundoId = 0;
    this.area = 0;
    this.soilType = '';
    this.irrigationType = '';
  }
}
