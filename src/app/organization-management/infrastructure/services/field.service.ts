import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BaseApiEndpoint } from '../../../shared/infrastructure/base-api-endpoint';
import { FieldResponse } from '../responses/field.response';
import { Field } from '../../domain/model/field.entity';
import { FieldAssembler } from '../assemblers/field.assembler';

@Injectable({
  providedIn: 'root'
})
export class FieldService extends BaseApiEndpoint {
  private readonly RESOURCE_PATH = 'fields';

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<Field[]> {
    const url = this.buildPath(this.RESOURCE_PATH);
    return this.http.get<FieldResponse[]>(url).pipe(
      map(responses => responses.map(res => FieldAssembler.toEntityFromResponse(res)))
    );
  }

  getById(id: number): Observable<Field> {
    const url = this.buildPath(this.RESOURCE_PATH, id.toString());
    return this.http.get<FieldResponse>(url).pipe(
      map(res => FieldAssembler.toEntityFromResponse(res))
    );
  }
}
