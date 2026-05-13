import { BaseAssembler } from '../../../shared/infrastructure/base-assembler';
import { Role, RolePosition } from '../../domain/model/role.entity';
import { RoleResponse } from '../responses/role.response';

export class RoleAssembler extends BaseAssembler<Role, RoleResponse> {
  toEntityFromResponse(response: RoleResponse): Role {
    return new Role(
      response.id,
      response.position as RolePosition,
      response.description
    );
  }
}
