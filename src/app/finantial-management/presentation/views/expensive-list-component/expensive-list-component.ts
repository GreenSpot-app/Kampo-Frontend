import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ExpenseCategory } from '../../../domain/model/enums/expense-category.enum';
import { Expense } from '../../../domain/model/entities/expense.entity';
import { FinancialStore } from '../../../application/financial.store';

@Component({
  selector: 'app-expensive-list-component',
  standalone: true,
  imports: [],
  templateUrl: './expensive-list-component.html',
  styleUrl: './expensive-list-component.css',
})
export class ExpenseListComponent implements OnInit {
  private readonly store = inject(FinancialStore);

  readonly expenses = signal<Expense[]>([]);
  readonly isLoading = this.store.isLoading;

  constructor() {
    effect(() => {
      const record = this.store.record();
      this.expenses.set(record?.getExpenses() ?? []);
    });
  }

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    const record = this.store.record();
    this.expenses.set(record?.getExpenses() ?? []);
  }

  filterByCategory(category: ExpenseCategory): void {
    const record = this.store.record();
    const all = record?.getExpenses() ?? [];
    this.expenses.set(all.filter((e) => e.getCategory() === category));
  }

  onAddExpense(): void {
    // Navegar a ruta de formulario o abrir diálogo según la app host.
  }
}
