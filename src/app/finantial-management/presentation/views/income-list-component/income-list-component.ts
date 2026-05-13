import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { FinancialStore } from '../../../application/financial.store';
import { Income } from '../../../domain/model/entities/income.entity';

@Component({
  selector: 'app-income-list-component',
  standalone: true,
  imports: [],
  templateUrl: './income-list-component.html',
  styleUrl: './income-list-component.css',
})
export class IncomeListComponent implements OnInit {
  private readonly store = inject(FinancialStore);

  readonly incomes = signal<Income[]>([]);
  readonly isLoading = this.store.isLoading;

  constructor() {
    effect(() => {
      const record = this.store.record();
      this.incomes.set(record?.getIncomes() ?? []);
    });
  }

  ngOnInit(): void {
    this.loadIncomes();
  }

  loadIncomes(): void {
    const record = this.store.record();
    this.incomes.set(record?.getIncomes() ?? []);
  }

  filterByDateRange(from: Date, to: Date): void {
    const record = this.store.record();
    const all = record?.getIncomes() ?? [];
    this.incomes.set(
      all.filter((i) => {
        const d = i.getDate();
        return d >= from && d <= to;
      }),
    );
  }

  onAddIncome(): void {}
}
