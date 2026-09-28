import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent],
})
export class PaymentMethodPage {
  // =========================
  // TRANSFER DETAILS
  // =========================

  recipient = '';

  amount = '';

  currencySymbol = '₱';

  currencyCode = 'PHP';

  // =========================
  // PAYMENT METHOD
  // =========================

  selectedMethod = 'gcash';

  // =========================
  // CONSTRUCTOR
  // =========================

  constructor() {
    this.loadTransferDetails();
  }

  // =========================
  // LOAD TRANSFER DETAILS
  // =========================

  loadTransferDetails() {
    const savedRecipient = localStorage.getItem('transferRecipient');

    const savedAmount = localStorage.getItem('transferAmount');

    const savedCurrencyCode = localStorage.getItem('transferCurrencyCode');

    const savedCurrencySymbol = localStorage.getItem('transferCurrencySymbol');

    if (savedRecipient) {
      this.recipient = savedRecipient;
    }

    if (savedAmount) {
      this.amount = savedAmount;
    }

    if (savedCurrencyCode) {
      this.currencyCode = savedCurrencyCode;
    }

    if (savedCurrencySymbol) {
      this.currencySymbol = savedCurrencySymbol;
    }
  }

  // =========================
  // SELECT PAYMENT METHOD
  // =========================

  selectMethod(method: string) {
    this.selectedMethod = method;
  }

  // =========================
  // DEBIT / CREDIT CARD
  // =========================

  goToDebitCreditCard() {
    console.log('Opening Debit/Credit Card page');

    localStorage.setItem('transferPaymentMethod', 'card');

    window.location.href = '/debit-credit-card';
  }

  // =========================
  // CONTINUE
  // =========================

  continuePayment() {
    localStorage.setItem('transferPaymentMethod', this.selectedMethod);

    console.log('Recipient:', this.recipient);

    console.log('Amount:', this.amount);

    console.log('Currency:', this.currencyCode);

    console.log('Payment Method:', this.selectedMethod);

    window.location.href = '/transfer-review';
  }

  // =========================
  // BACK
  // =========================

  goBack() {
    window.location.href = '/send';
  }
}
