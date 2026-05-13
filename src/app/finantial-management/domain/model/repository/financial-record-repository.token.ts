import { InjectionToken } from '@angular/core';
import { FinancialRecordRepository } from './financial-record.repository';


export const FINANCIAL_RECORD_REPOSITORY = new InjectionToken<FinancialRecordRepository>(
  'FinancialRecordRepository',
);
