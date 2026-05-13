import { BaseResponse } from '../../../shared/infrastructure/base-response';

export class EmployeeResponse extends BaseResponse {
  name: string;
  email: string;
  role: string;
  status: string;
  fieldId: number;

  constructor(
    id: number,
    name: string,
    email: string,
    role: string,
    status: string,
    fieldId: number
  ) {
    super(id);
    this.name = name;
    this.email = email;
    this.role = role;
    this.status = status;
    this.fieldId = fieldId;
  }
}
