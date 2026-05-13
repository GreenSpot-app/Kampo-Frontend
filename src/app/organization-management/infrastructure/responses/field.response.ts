import { BaseResponse } from '../../../shared/infrastructure/base-response';

export class FieldResponse extends BaseResponse {
  name: string;
  fundoId: number;
  area: number;
  soilType: string;
  irrigationType: string;

  constructor() {
    super(0);
    this.name = '';
    this.fundoId = 0;
    this.area = 0;
    this.soilType = '';
    this.irrigationType = '';
  }
}
