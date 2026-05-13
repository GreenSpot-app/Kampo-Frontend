import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'organization-management',
    loadChildren: () =>
      import('./organization-management/presentation/views/organization-management.routes').then(
        (m) => m.ORGANIZATION_ROUTES
      ),
  },
  {
    path: 'season-management',
    loadChildren: () =>
      import('./season-management/presentation/views/season-management.routes').then(
        (m) => m.SEASON_ROUTES
      ),
  },
  {
    path: 'finantial-management',
    loadChildren: () =>
      import('./finantial-management/presentation/views/finantial-management.routes').then(
        (m) => m.FINANTIAL_MANAGEMENT_ROUTES,
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'organization-management' },
];
