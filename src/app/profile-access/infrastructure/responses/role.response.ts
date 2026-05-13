import { BaseResponse } from '../../../shared/infrastructure/base-response';

export class RoleResponse extends BaseResponse {
  position: string;
  description: string;

  constructor(id: number, position: string, description: string) {
    super(id);
    this.position = position;
    this.description = description;
  }
}
