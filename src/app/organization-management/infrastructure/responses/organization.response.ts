export class OrganizationResponse {
  id: number;
  name: string;
  ruc: string;
  address: string;
  phone: string;
  email: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.ruc = '';
    this.address = '';
    this.phone = '';
    this.email = '';
  }
}
