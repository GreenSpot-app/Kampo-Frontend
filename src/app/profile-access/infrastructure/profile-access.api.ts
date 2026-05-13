import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { User } from '../domain/model/user.entity';
import { Role } from '../domain/model/role.entity';
import { Permission } from '../domain/model/permission.entity';
import { UserResponse } from './responses/user.response';
import { RoleResponse } from './responses/role.response';
import { PermissionResponse } from './responses/permission.response';
import { UserAssembler } from './assemblers/user.assembler';
import { RoleAssembler } from './assemblers/role.assembler';
import { PermissionAssembler } from './assemblers/permission.assembler';

@Injectable({ providedIn: 'root' })
export class ProfileAccessApi extends BaseApi {
  private endpoint = new BaseApiEndpoint();
  private userAssembler = new UserAssembler();
  private roleAssembler = new RoleAssembler();
  private permissionAssembler = new PermissionAssembler();

  getUsers(): Observable<User[]> {
    return this.get<UserResponse[]>(this.endpoint['buildPath']('users')).pipe(
      map(responses => this.userAssembler.toEntitiesFromResponse(responses))
    );
  }

  getRoles(): Observable<Role[]> {
    return this.get<RoleResponse[]>(this.endpoint['buildPath']('roles')).pipe(
      map(responses => this.roleAssembler.toEntitiesFromResponse(responses))
    );
  }

  getPermissions(): Observable<Permission[]> {
    return this.get<PermissionResponse[]>(this.endpoint['buildPath']('permissions')).pipe(
      map(responses => this.permissionAssembler.toEntitiesFromResponse(responses))
    );
  }

  registerUser(user: object): Observable<User> {
    return this.post<UserResponse>(this.endpoint['buildPath']('users'), user).pipe(
      map(response => this.userAssembler.toEntityFromResponse(response))
    );
  }

  modifyProfile(userId: number, user: object): Observable<User> {
    return this.put<UserResponse>(this.endpoint['buildPath']('users', String(userId)), user).pipe(
      map(response => this.userAssembler.toEntityFromResponse(response))
    );
  }
}
