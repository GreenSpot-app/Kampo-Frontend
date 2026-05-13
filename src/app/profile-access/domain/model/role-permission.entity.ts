import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class RolePermission extends BaseEntity {
  private permissionId: number;
  private roleId: number;

  constructor(
    id: number,
    permissionId: number,
    roleId: number
  ) {
    super(id);
    this.permissionId = permissionId;
    this.roleId = roleId;
  }

  getPermissionId(): number { return this.permissionId; }
  getRoleId(): number { return this.roleId; }
}
