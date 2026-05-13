import { Routes } from '@angular/router';

const shell = () =>
  import('./inventory-shell/inventory-shell').then((m) => m.InventoryShellComponent);

const inventoryView = () =>
  import('./inventory-view-component/inventory-view-component').then((m) => m.InventoryViewComponent);

const inventoryForm = () =>
  import('./inventory-form-component/inventory-form-component').then((m) => m.InventoryFormComponent);

const inventoryList = () =>
  import('./inventory-list-component/inventory-list-component').then((m) => m.InventoryListComponent);

const supplierForm = () =>
  import('./supplier-form-component/supplier-form-component').then((m) => m.SupplierFormComponent);

const supplierContact = () =>
  import('./supplier-contact-view-component/supplier-contact-view-component').then(
    (m) => m.SupplierContactViewComponent,
  );

const orderInputForm = () =>
  import('./order-input-form-component/order-input-form-component').then((m) => m.OrderInputFormComponent);

const stockDashboard = () =>
  import('./stock-dashboard-component/stock-dashboard-component').then((m) => m.StockDashboardComponent);

export const INVENTORY_MANAGEMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: shell,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'inventario' },
      { path: 'inventario', loadComponent: inventoryView },
      { path: 'inventario/lista', loadComponent: inventoryList },
      { path: 'inventario/registro', loadComponent: inventoryForm },
      { path: 'proveedores/nuevo', loadComponent: supplierForm },
      { path: 'proveedores/:id/contacto', loadComponent: supplierContact },
      { path: 'pedidos', loadComponent: orderInputForm },
      { path: 'panel', loadComponent: stockDashboard },
    ],
  },
];
