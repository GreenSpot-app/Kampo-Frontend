import { BaseAssembler } from '../../../shared/infrastructure/base-assembler';
import { Permission, PermissionCategory } from '../../domain/model/permission.entity';
import { PermissionResponse } from '../responses/permission.response';

export class PermissionAssembler extends BaseAssembler<Permission, PermissionResponse> {
  toEntityFromResponse(response: PermissionResponse): Permission {
    return new Permission(
      response.id,
      response.category as PermissionCategory,
      response.description
    );
  }
}
