import { ExpenseResource, ExpenseResponse } from './expense-response.response';
import { IncomeResource, IncomeResponse } from './income-response.response';
import { SaleResource, SaleResponse } from './sale-response.response';

export interface FinancialRecordResponse {
  id: number;
  fundoId: number;
  seasonId: number;
  expenses: ExpenseResponse[];
  incomes: IncomeResponse[];
  sales: SaleResponse[];
}

export interface FinancialRecordResource {
  fundoId: number;
  seasonId: number;
  expenses: ExpenseResource[];
  incomes: IncomeResource[];
  sales: SaleResource[];
}
