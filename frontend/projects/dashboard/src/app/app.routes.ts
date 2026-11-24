import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./overview').then(page => page.OverviewPage), title: 'Vue d’ensemble · CivicSignal' },
  { path: 'signalements', loadComponent: () => import('./reports').then(page => page.ReportsPage), title: 'Signalements · CivicSignal' },
  { path: 'signalements/:id', loadComponent: () => import('./report-detail').then(page => page.ReportDetailPage), title: 'Dossier · CivicSignal' },
  { path: '**', redirectTo: '' },
];
