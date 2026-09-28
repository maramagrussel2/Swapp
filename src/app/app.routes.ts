import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'onboarding', pathMatch: 'full' },
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./onboarding/onboarding.page').then((m) => m.OnboardingPage),
  },
  {
    path: 'login1',
    loadComponent: () =>
      import('./login1/login1.page').then((m) => m.Login1Page),
  },
  {
    path: 'login2',
    loadComponent: () =>
      import('./login2/login2.page').then((m) => m.Login2Page),
  },
];
