import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { FinancialStore } from '../../../application/financial.store';
import { Sale } from '../../../domain/model/entities/sale.entity';
import { Money } from '../../../domain/model/value-object/money.vo';

@Component({
  selector: 'app-sales-list-component',
  standalone: true,
  imports: [],
  templateUrl: './sales-list-component.html',
  styleUrl: './sales-list-component.css',
})
export class SaleListComponent implements OnInit {
  private readonly store = inject(FinancialStore);

  readonly sales = signal<Sale[]>([]);
  readonly isLoading = this.store.isLoading;

  constructor() {
    effect(() => {
      const record = this.store.record();
      this.sales.set(record?.getSales() ?? []);
    });
  }

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales(): void {
    const record = this.store.record();
    this.sales.set(record?.getSales() ?? []);
  }

  onAddSale(): void {}

  calculateTotalRevenue(): Money {
    const record = this.store.record();
    const list = record?.getSales() ?? [];
    const currency = list[0]?.getPricePerUnit().getCurrency() ?? 'PEN';
    const zero = new Money(0, currency);
    return list.reduce((acc, s) => acc.add(s.getTotalAmount()), zero);
  }
}
