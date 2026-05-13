import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export enum RolePosition {
  ADMIN = 'ADMIN',
  AGRONOMIST = 'AGRONOMIST',
  TECHNICIAN = 'TECHNICIAN',
  SUPERVISOR = 'SUPERVISOR'
}

export class Role extends BaseEntity {
  private position: RolePosition;
  private description: string;

  constructor(
    id: number,
    position: RolePosition,
    description: string
  ) {
    super(id);
    this.position = position;
    this.description = description;
  }

  getPosition(): RolePosition { return this.position; }
  getDescription(): string { return this.description; }
}
