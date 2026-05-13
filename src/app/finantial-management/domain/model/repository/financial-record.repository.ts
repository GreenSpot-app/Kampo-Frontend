import { FundoId } from '../value-object/fundo-id.vo';
import { SeasonId } from '../value-object/season-id.vo';
import { Observable } from 'rxjs';
import { FinancialRecord } from '../aggregates/financial-record.aggregate';

export interface FinancialRecordRepository {
  findByFundoAndSeason(fundoId: FundoId, seasonId: SeasonId): Observable<FinancialRecord>;

  save(record: FinancialRecord): Observable<FinancialRecord>;

  findAllByFundo(fundoId: FundoId): Observable<FinancialRecord[]>;
}
