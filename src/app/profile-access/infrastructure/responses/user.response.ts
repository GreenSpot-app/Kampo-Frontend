import { BaseResponse } from '../../../shared/infrastructure/base-response';

export class UserResponse extends BaseResponse {
  lastName: string;
  firstName: string;
  createdAt: Date;
  email: string;
  phone: string;

  constructor(
    id: number,
    lastName: string,
    firstName: string,
    createdAt: Date,
    email: string,
    phone: string
  ) {
    super(id);
    this.lastName = lastName;
    this.firstName = firstName;
    this.createdAt = createdAt;
    this.email = email;
    this.phone = phone;
  }
}
