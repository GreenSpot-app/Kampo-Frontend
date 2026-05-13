import { Routes } from '@angular/router';

const expenseList = () =>
  import('./expensive-list-component/expensive-list-component').then((m) => m.ExpenseListComponent);

const expenseForm = () =>
  import('./expensive-form-component/expensive-form-component').then((m) => m.ExpenseFormComponent);

const incomeList = () =>
  import('./income-list-component/income-list-component').then((m) => m.IncomeListComponent);

const saleList = () =>
  import('./sales-list-component/sales-list-component').then((m) => m.SaleListComponent);

const profitDashboard = () =>
  import('./profit-dashboard-component/profit-dashboard-component').then(
    (m) => m.ProfitabilityDashboardComponent,
  );

export const FINANTIAL_MANAGEMENT_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gastos' },
  { path: 'gastos', loadComponent: expenseList },
  { path: 'gastos/nuevo', loadComponent: expenseForm },
  { path: 'ingresos', loadComponent: incomeList },
  { path: 'ventas', loadComponent: saleList },
  { path: 'rentabilidad', loadComponent: profitDashboard },
];
