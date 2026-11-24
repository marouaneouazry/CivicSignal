import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home').then(page => page.HomePage), title: 'CivicSignal · Casablanca' },
  { path: 'connexion', loadComponent: () => import('./account').then(page => page.AccountPage), title: 'Connexion · CivicSignal' },
  { path: 'inscription', loadComponent: () => import('./account').then(page => page.AccountPage), data: { register: true }, title: 'Inscription · CivicSignal' },
  { path: 'signaler', loadComponent: () => import('./submission').then(page => page.SubmissionPage), title: 'Nouveau signalement · CivicSignal' },
  { path: 'mes-signalements', loadComponent: () => import('./my-reports').then(page => page.MyReportsPage), title: 'Mes signalements · CivicSignal' },
  { path: '**', redirectTo: '' },
];
