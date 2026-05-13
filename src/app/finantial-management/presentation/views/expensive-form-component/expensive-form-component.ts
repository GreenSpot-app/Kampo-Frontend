import { Component, inject, OnInit, signal } from '@angular/core';
import { FinancialStore } from '../../../application/financial.store';
import { ExpenseCategory } from '../../../domain/model/enums/expense-category.enum';
import { Money } from '../../../domain/model/value-object/money.vo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expensive-form-component',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './expensive-form-component.html',
  styleUrl: './expensive-form-component.css',
})
export class ExpenseFormComponent implements OnInit {
  private readonly store = inject(FinancialStore);

  readonly categories = signal(Object.values(ExpenseCategory));
  readonly isSubmitting = signal(false);

  ngOnInit(): void {}

  onSubmit(description: string, amount: Money, category: ExpenseCategory, date: Date): void {
    this.isSubmitting.set(true);
    try {
      this.store.addExpense(description, amount, category, date);
    } finally {
      this.isSubmitting.set(false);
    }
  }

  cancel(): void {}

  submit(): void {
    // Placeholder: enlazar con FormGroup en implementación real.
  }
}
