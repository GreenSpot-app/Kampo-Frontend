import { BaseResponse } from '../../../shared/infrastructure/base-response';

export class CropResponse extends BaseResponse {
  name: string;
  scientificName: string;
  variety: string;
  growthCycle: number;

  constructor() {
    super(0);
    this.name = '';
    this.scientificName = '';
    this.variety = '';
    this.growthCycle = 0;
  }
}
