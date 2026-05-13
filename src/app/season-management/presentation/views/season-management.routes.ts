import { Routes } from '@angular/router';

const seasonList = () =>
  import('./season-list/season-list').then((m) => m.SeasonListComponent);

const seasonForm = () =>
  import('./season-form/season-form').then((m) => m.SeasonFormComponent);

const seasonDetail = () =>
  import('./season-detail/season-detail').then((m) => m.SeasonDetailComponent);

export const SEASON_ROUTES: Routes = [
  { path: '', loadComponent: seasonList },
  { path: 'new', loadComponent: seasonForm },
  { path: 'edit/:id', loadComponent: seasonForm },
  { path: 'view/:id', loadComponent: seasonDetail },
];
