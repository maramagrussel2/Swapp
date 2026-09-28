import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full',
  },

  {
    path: 'onboarding',
    loadComponent: () =>
      import('./onboarding/onboarding.page').then((m) => m.OnboardingPage),
  },

  {
    path: 'signup',
    loadComponent: () =>
      import('./signup/signup.page').then((m) => m.SignupPage),
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

  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'send',
    loadComponent: () => import('./send/send.page').then((m) => m.SendPage),
  },

  {
    path: 'payment-method',
    loadComponent: () =>
      import('./payment-method/payment-method.page').then(
        (m) => m.PaymentMethodPage,
      ),
  },

  {
    path: 'transfer-review',
    loadComponent: () =>
      import('./transfer-review/transfer-review.page').then(
        (m) => m.TransferReviewPage,
      ),
  },

  {
    path: 'trans-successful',
    loadComponent: () =>
      import('./trans-successful/trans-successful.page').then(
        (m) => m.TransSuccessfulPage,
      ),
  },

  {
    path: 'pay',
    loadComponent: () => import('./pay/pay.page').then((m) => m.PayPage),
  },

  {
    path: 'top-up',
    loadComponent: () =>
      import('./top-up/top-up.page').then((m) => m.TopUpPage),
  },

  {
    path: 'bank-transfer',
    loadComponent: () =>
      import('./bank-transfer/bank-transfer.page').then(
        (m) => m.BankTransferPage,
      ),
  },

  {
    path: 'bank-transfer-details',
    loadComponent: () =>
      import('./bank-transfer-details/bank-transfer-details.page').then(
        (m) => m.BankTransferDetailsPage,
      ),
  },

  {
    path: 'debit-credit-card',
    loadComponent: () =>
      import('./debit-credit-card/debit-credit-card.page').then(
        (m) => m.DebitCreditCardPage,
      ),
  },

  {
    path: 'qr-generator',
    loadComponent: () =>
      import('./qr-generator/qr-generator.page').then((m) => m.QrGeneratorPage),
  },

  {
    path: 'history',
    loadComponent: () =>
      import('./history/history.page').then((m) => m.HistoryPage),
  },

  // =========================
  // CONVERT
  // =========================

  {
    path: 'convert',
    loadComponent: () =>
      import('./convert/convert.page').then((m) => m.ConvertPage),
  },

  // =========================
  // WILDCARD
  // =========================

  {
    path: '**',
    redirectTo: 'onboarding',
  },
  {
    path: 'trans-successful',
    loadComponent: () => import('./trans-successful/trans-successful.page').then( m => m.TransSuccessfulPage)
  },
];
