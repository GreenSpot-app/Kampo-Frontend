import { Routes } from '@angular/router';
const organizationList = () =>
  import('./organization-list/organization-list').then((m) => m.OrganizationListComponent);
const organizationForm = () =>
  import('./organization-form/organization-form').then((m) => m.OrganizationFormComponent);
export const ORGANIZATION_ROUTES: Routes = [
  { path: '', loadComponent: organizationList },
  { path: 'new', loadComponent: organizationForm },
  { path: 'edit/:id', loadComponent: organizationForm },
];
