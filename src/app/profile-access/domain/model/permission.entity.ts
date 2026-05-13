import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export enum PermissionCategory {
  USERS = 'USERS',
  REPORTS = 'REPORTS',
  ALERTS = 'ALERTS',
  INVENTORY = 'INVENTORY',
  FINANCIAL = 'FINANCIAL'
}

export class Permission extends BaseEntity {
  private category: PermissionCategory;
  private description: string;

  constructor(
    id: number,
    category: PermissionCategory,
    description: string
  ) {
    super(id);
    this.category = category;
    this.description = description;
  }

  getCategory(): PermissionCategory { return this.category; }
  getDescription(): string { return this.description; }
}
