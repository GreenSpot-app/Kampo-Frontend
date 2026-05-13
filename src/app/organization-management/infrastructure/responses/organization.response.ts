import { BaseResponse } from '../../../shared/infrastructure/base-response';

export class OrganizationResponse extends BaseResponse {
  name: string;
  ruc: string;
  address: string;
  phone: string;
  email: string;

  constructor() {
    super(0);
    this.name = '';
    this.ruc = '';
    this.address = '';
    this.phone = '';
    this.email = '';
  }
}
