import { Component, inject, OnInit } from '@angular/core';
import { FinancialStore } from '../../../application/financial.store';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-profit-dashboard-component',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './profit-dashboard-component.html',
  styleUrl: './profit-dashboard-component.css',
})
export class ProfitabilityDashboardComponent implements OnInit {
  readonly store = inject(FinancialStore);

  ngOnInit(): void {
    this.loadProfitability();
  }

  loadProfitability(): void {
    this.store.computeProfitability();
  }

  getMarginColor(): string {
    const p = this.store.profitability();
    if (!p) {
      return 'inherit';
    }
    return p.isProfit() ? 'green' : 'red';
  }
}
