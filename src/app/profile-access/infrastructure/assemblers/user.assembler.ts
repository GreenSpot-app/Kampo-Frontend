import { BaseAssembler } from '../../../shared/infrastructure/base-assembler';
import { User } from '../../domain/model/user.entity';
import { UserResponse } from '../responses/user.response';

export class UserAssembler extends BaseAssembler<User, UserResponse> {
  toEntityFromResponse(response: UserResponse): User {
    return new User(
      response.id,
      response.lastName,
      response.firstName,
      response.createdAt,
      response.email,
      response.phone
    );
  }
}
