import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BaseApiEndpoint } from '../../../shared/infrastructure/base-api-endpoint';
import { CropResponse } from '../responses/crop.response';
import { Crop } from '../../domain/model/crop.entity';
import { CropAssembler } from '../assemblers/crop.assembler';

@Injectable({
  providedIn: 'root'
})
export class CropService extends BaseApiEndpoint {
  private readonly RESOURCE_PATH = 'crops';

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<Crop[]> {
    const url = this.buildPath(this.RESOURCE_PATH);
    return this.http.get<CropResponse[]>(url).pipe(
      map(responses => responses.map(res => CropAssembler.toEntityFromResponse(res)))
    );
  }

  getById(id: number): Observable<Crop> {
    const url = this.buildPath(this.RESOURCE_PATH, id.toString());
    return this.http.get<CropResponse>(url).pipe(
      map(res => CropAssembler.toEntityFromResponse(res))
    );
  }
}
