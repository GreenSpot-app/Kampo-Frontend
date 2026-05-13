import { ExpenseId } from '../value-object/expense-id.vo';
import { Money } from '../value-object/money.vo';
import { ExpenseCategory } from '../enums/expense-category.enum';

export class Expense {
  constructor(
    private readonly id: ExpenseId,
    private readonly description: string,
    private amount: Money,
    private readonly category: ExpenseCategory,
    private readonly date: Date,
  ) {}

  getId(): ExpenseId {
    return this.id;
  }

  getDescription(): string {
    return this.description;
  }

  getAmount(): Money {
    return this.amount;
  }

  getCategory(): ExpenseCategory {
    return this.category;
  }

  getDate(): Date {
    return this.date;
  }

  updateAmount(newAmount: Money): void {
    this.amount = newAmount;
  }
}
