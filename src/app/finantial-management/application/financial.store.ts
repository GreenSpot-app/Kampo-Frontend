import { computed, inject, Injectable, signal } from '@angular/core';
import { FinancialRecordRepository } from '../domain/model/repository/financial-record.repository';
import { FINANCIAL_RECORD_REPOSITORY } from '../domain/model/repository/financial-record-repository.token';
import { FinancialRecord } from '../domain/model/aggregates/financial-record.aggregate';
import { Profitability } from '../domain/model/value-object/profitability.vo';
import { FundoId } from '../domain/model/value-object/fundo-id.vo';
import { SeasonId } from '../domain/model/value-object/season-id.vo';
import { finalize } from 'rxjs';
import { Money } from '../domain/model/value-object/money.vo';
import { ExpenseCategory } from '../domain/model/enums/expense-category.enum';

@Injectable({ providedIn: 'root' })
export class FinancialStore {
  private readonly repository = inject<FinancialRecordRepository>(FINANCIAL_RECORD_REPOSITORY);

  readonly record = signal<FinancialRecord | null>(null);
  readonly profitability = signal<Profitability | null>(null);
  readonly isLoading = signal(false);
  readonly selectedFundoId = signal<FundoId | null>(null);
  readonly selectedSeasonId = signal<SeasonId | null>(null);

  readonly hasRecord = computed(() => this.record() !== null);

  loadRecord(fundoId: FundoId, seasonId: SeasonId): void {
    this.isLoading.set(true);
    this.selectedFundoId.set(fundoId);
    this.selectedSeasonId.set(seasonId);
    this.repository
      .findByFundoAndSeason(fundoId, seasonId)
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: (loaded) => {
          this.record.set(loaded);
          this.computeProfitability();
        },
        error: () => {
          this.record.set(null);
          this.profitability.set(null);
        },
      });
  }

  addExpense(description: string, amount: Money, category: ExpenseCategory, date: Date): void {
    const current = this.record();
    if (!current) {
      return;
    }
    const next = FinancialStore.cloneRecord(current);
    next.addExpense(description, amount, category, date);
    this.record.set(next);
    this.computeProfitability();
  }

  addIncome(description: string, amount: Money, date: Date): void {
    const current = this.record();
    if (!current) {
      return;
    }
    const next = FinancialStore.cloneRecord(current);
    next.addIncome(description, amount, date);
    this.record.set(next);
    this.computeProfitability();
  }

  addSale(cropName: string, quantity: number, pricePerUnit: Money, date: Date): void {
    const current = this.record();
    if (!current) {
      return;
    }
    const next = FinancialStore.cloneRecord(current);
    next.addSale(cropName, quantity, pricePerUnit, date);
    this.record.set(next);
    this.computeProfitability();
  }

  computeProfitability(): void {
    const current = this.record();
    if (!current) {
      this.profitability.set(null);
      return;
    }
    this.profitability.set(current.calculateProfitability());
  }

  selectFundo(fundoId: FundoId): void {
    this.selectedFundoId.set(fundoId);
  }

  selectSeason(seasonId: SeasonId): void {
    this.selectedSeasonId.set(seasonId);
  }

  private static cloneRecord(source: FinancialRecord): FinancialRecord {
    return new FinancialRecord(
      source.getId(),
      source.getFundoId(),
      source.getSeasonId(),
      source.getExpenses(),
      source.getIncomes(),
      source.getSales(),
    );
  }
}
