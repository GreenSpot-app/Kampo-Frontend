import { BaseResponse } from '../../../shared/infrastructure/base-response';

export class FundoResponse extends BaseResponse {
  name: string;
  organizationId: number;
  location: string;
  totalArea: number;

  constructor() {
    super(0);
    this.name = '';
    this.organizationId = 0;
    this.location = '';
    this.totalArea = 0;
  }
}
