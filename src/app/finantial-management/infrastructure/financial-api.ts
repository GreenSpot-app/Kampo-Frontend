import { FinancialRecordRepository } from '../domain/model/repository/financial-record.repository';
import { Injectable } from '@angular/core';
import { FinancialRecordAssembler } from './assemblers/financial-record-assembler.assembler';
import { HttpClient } from '@angular/common/http';
import { FundoId } from '../domain/model/value-object/fundo-id.vo';
import { SeasonId } from '../domain/model/value-object/season-id.vo';
import { map, Observable } from 'rxjs';
import { FinancialRecord } from '../domain/model/aggregates/financial-record.aggregate';
import { FinancialRecordResponse } from './responses/financial-record-response.response';

@Injectable({ providedIn: 'root' })
export class FinancialApi implements FinancialRecordRepository {
  private readonly assembler = new FinancialRecordAssembler();
  private readonly endpoint = '/api/financial-records';

  constructor(private readonly http: HttpClient) {}

  findByFundoAndSeason(fundoId: FundoId, seasonId: SeasonId): Observable<FinancialRecord> {
    const url = `${this.endpoint}/${fundoId.getValue()}/seasons/${seasonId.getValue()}`;
    return this.http
      .get<FinancialRecordResponse>(url)
      .pipe(map((dto) => this.assembler.toEntityFromResponse(dto)));
  }

  save(record: FinancialRecord): Observable<FinancialRecord> {
    const body = this.assembler.toResourceFromEntity(record);
    const url = `${this.endpoint}/${record.getId().getValue()}`;
    return this.http
      .put<FinancialRecordResponse>(url, body)
      .pipe(map((dto) => this.assembler.toEntityFromResponse(dto)));
  }

  findAllByFundo(fundoId: FundoId): Observable<FinancialRecord[]> {
    const url = `${this.endpoint}?fundoId=${fundoId.getValue()}`;
    return this.http
      .get<FinancialRecordResponse[]>(url)
      .pipe(map((list) => list.map((dto) => this.assembler.toEntityFromResponse(dto))));
  }
}
