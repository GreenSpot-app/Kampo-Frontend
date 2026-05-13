import { Sale } from '../entities/sale.entity';
import { Expense } from '../entities/expense.entity';
import { Income } from '../entities/income.entity';
import { FinancialRecordId } from '../value-object/financial-record-id.vo';
import { FundoId } from '../value-object/fundo-id.vo';
import { SeasonId } from '../value-object/season-id.vo';
import { Money } from '../value-object/money.vo';
import { ExpenseCategory } from '../enums/expense-category.enum';
import { ExpenseId } from '../value-object/expense-id.vo';
import { IncomeId } from '../value-object/income-id.vo';
import { SaleId } from '../value-object/sale-id.vo';
import { Profitability } from '../value-object/profitability.vo';

export class FinancialRecord {
  private readonly expenses: Expense[] = [];
  private readonly incomes: Income[] = [];
  private readonly sales: Sale[] = [];

  constructor(
    private readonly id: FinancialRecordId,
    private readonly fundoId: FundoId,
    private readonly seasonId: SeasonId,
    expenses: Expense[] = [],
    incomes: Income[] = [],
    sales: Sale[] = [],
  ) {
    this.expenses.push(...expenses);
    this.incomes.push(...incomes);
    this.sales.push(...sales);
  }

  getId(): FinancialRecordId {
    return this.id;
  }

  getFundoId(): FundoId {
    return this.fundoId;
  }

  getSeasonId(): SeasonId {
    return this.seasonId;
  }

  addExpense(
    description: string,
    amount: Money,
    category: ExpenseCategory,
    date: Date,
    id: ExpenseId = new ExpenseId(FinancialRecord.nextNumericId()),
  ): void {
    this.expenses.push(new Expense(id, description, amount, category, date));
  }

  addIncome(
    description: string,
    amount: Money,
    date: Date,
    id: IncomeId = new IncomeId(FinancialRecord.nextNumericId()),
  ): void {
    this.incomes.push(new Income(id, description, amount, date));
  }

  addSale(
    cropName: string,
    quantity: number,
    pricePerUnit: Money,
    date: Date,
    id: SaleId = new SaleId(FinancialRecord.nextNumericId()),
  ): void {
    this.sales.push(new Sale(id, cropName, quantity, pricePerUnit, date));
  }

  calculateProfitability(): Profitability {
    const currency = this.resolveCurrency();
    const zero = new Money(0, currency);

    const totalExpenses = this.expenses.reduce((acc, e) => acc.add(e.getAmount()), zero);
    const totalIncome = this.incomes.reduce((acc, i) => acc.add(i.getAmount()), zero);
    const totalSales = this.sales.reduce((acc, s) => acc.add(s.getTotalAmount()), zero);

    const revenue = totalIncome.add(totalSales);
    const netProfit = revenue.subtract(totalExpenses);

    const margin =
      revenue.getAmount() === 0 ? 0 : (netProfit.getAmount() / revenue.getAmount()) * 100;

    return new Profitability(totalIncome, totalExpenses, totalSales, netProfit, margin);
  }

  getExpenses(): Expense[] {
    return [...this.expenses];
  }

  getIncomes(): Income[] {
    return [...this.incomes];
  }

  getSales(): Sale[] {
    return [...this.sales];
  }

  private resolveCurrency(): string {
    const first =
      this.expenses[0]?.getAmount() ??
      this.incomes[0]?.getAmount() ??
      this.sales[0]?.getPricePerUnit();
    return first?.getCurrency() ?? 'PEN';
  }

  private static nextNumericId(): number {
    return Math.floor(Math.random() * 1_000_000_000) + Date.now();
  }
}
