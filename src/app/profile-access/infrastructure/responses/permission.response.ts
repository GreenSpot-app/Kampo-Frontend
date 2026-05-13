import { BaseResponse } from '../../../shared/infrastructure/base-response';

export class PermissionResponse extends BaseResponse {
  category: string;
  description: string;

  constructor(id: number, category: string, description: string) {
    super(id);
    this.category = category;
    this.description = description;
  }
}
