import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BaseApiEndpoint } from '../../../shared/infrastructure/base-api-endpoint';
import { FundoResponse } from '../responses/fundo.response';
import { Fundo } from '../../domain/model/fundo.entity';
import { FundoAssembler } from '../assemblers/fundo.assembler';

@Injectable({
  providedIn: 'root'
})
export class FundoService extends BaseApiEndpoint {
  private readonly RESOURCE_PATH = 'fundos';

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<Fundo[]> {
    const url = this.buildPath(this.RESOURCE_PATH);
    return this.http.get<FundoResponse[]>(url).pipe(
      map(responses => responses.map(res => FundoAssembler.toEntityFromResponse(res)))
    );
  }

  getById(id: number): Observable<Fundo> {
    const url = this.buildPath(this.RESOURCE_PATH, id.toString());
    return this.http.get<FundoResponse>(url).pipe(
      map(res => FundoAssembler.toEntityFromResponse(res))
    );
  }
}
