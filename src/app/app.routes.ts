import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.page').then((m) => m.ProfilePage),
  },
  {
    path: 'profile/personal-info',
    loadComponent: () =>
      import('./profile/personal-info/personal-info.page').then(
        (m) => m.PersonalInfoPage
      ),
  },
  {
    path: 'profile/security',
    loadComponent: () =>
      import('./profile/security/security.page').then((m) => m.SecurityPage),
  },
  {
    path: 'profile/security/change-pass',
    loadComponent: () =>
      import(
        './profile/security/change-pass/change-pass.page'
      ).then((m) => m.ChangePasswordPage),
  },
  {
    path: 'profile/security/two-factor',
    loadComponent: () =>
      import(
        './profile/security/two-factor/two-factor.page'
      ).then((m) => m.TwoFactorPage),
  },
  {
    path: 'profile/security/login-sess',
    loadComponent: () =>
      import(
        './profile/security/login-sess/login-sess.page'
      ).then((m) => m.LoginSessPage),
  },
  {
    path: 'profile/notification',
    loadComponent: () =>
      import(
        './profile/notification/notification.page'
      ).then((m) => m.NotificationPage),
  },
  {
  path: 'profile/help-center',
  loadComponent: () =>
    import('./profile/help-center/help-center.page').then(
      (m) => m.HelpCenterPage
    ),
},
  {
    path: 'help-center',
    loadComponent: () => import('./profile/help-center/help-center.page').then( m => m.HelpCenterPage)
  },
  {
  path: 'profile/about-splash',
  loadComponent: () =>
    import('./profile/about-splash/about-splash.page').then(
      (m) => m.AboutSplashPage
    ),
},
]; 