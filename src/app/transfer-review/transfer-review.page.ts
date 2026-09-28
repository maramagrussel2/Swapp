import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-transfer-review',
  templateUrl: './transfer-review.page.html',
  styleUrls: ['./transfer-review.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent],
})
export class TransferReviewPage {
  recipient = '';
  amount = '';

  currencySymbol = '₱';
  currencyCode = 'PHP';

  paymentMethod = 'gcash';

  recipientInitial = 'M';

  paymentName = 'GCash';
  paymentDetail = 'GCash Wallet';
  paymentIcon = 'G';

  constructor() {
    this.loadTransferDetails();
  }

  /* =========================
     LOAD TRANSFER DATA
     ========================= */

  loadTransferDetails() {
    const savedRecipient = localStorage.getItem('transferRecipient');

    const savedAmount = localStorage.getItem('transferAmount');

    const savedCurrencyCode = localStorage.getItem('transferCurrencyCode');

    const savedCurrencySymbol = localStorage.getItem('transferCurrencySymbol');

    const savedPaymentMethod = localStorage.getItem('transferPaymentMethod');

    if (savedRecipient) {
      this.recipient = savedRecipient;

      this.recipientInitial = savedRecipient.charAt(0).toUpperCase();
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

    if (savedPaymentMethod) {
      this.paymentMethod = savedPaymentMethod;

      this.setPaymentMethodDetails(savedPaymentMethod);
    }
  }

  /* =========================
     PAYMENT METHOD
     ========================= */

  setPaymentMethodDetails(method: string) {
    if (method === 'gcash') {
      this.paymentName = 'GCash';

      this.paymentDetail = 'GCash Wallet';

      this.paymentIcon = 'G';
    } else if (method === 'bank') {
      this.paymentName = 'Bank Account';

      this.paymentDetail = 'BDO •••• 4521';

      this.paymentIcon = '🏦';
    } else if (method === 'card') {
      this.paymentName = 'Debit / Credit Card';

      this.paymentDetail = 'Visa / Mastercard';

      this.paymentIcon = '💳';
    }
  }

  /* =========================
     CONFIRM TRANSFER
     ========================= */

  confirmTransfer() {
    console.log('Transfer confirmed');

    console.log('Recipient:', this.recipient);

    console.log('Amount:', this.amount);

    console.log('Currency:', this.currencyCode);

    console.log('Payment Method:', this.paymentMethod);

    /*
      Go to Transfer Successful page
    */

    window.location.href = '/trans-successful';
  }

  /* =========================
     BACK
     ========================= */

  goBack() {
    window.location.href = '/payment-method';
  }

  /* =========================
     CANCEL
     ========================= */

  cancelTransfer() {
    window.location.href = '/home';
  }
}
