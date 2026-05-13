import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class UserRole extends BaseEntity {
  private rolesId: number;
  private userId: number;

  constructor(
    id: number,
    rolesId: number,
    userId: number
  ) {
    super(id);
    this.rolesId = rolesId;
    this.userId = userId;
  }

  getRolesId(): number { return this.rolesId; }
  getUserId(): number { return this.userId; }
}
