import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-trans-successful',
  templateUrl: './trans-successful.page.html',
  styleUrls: ['./trans-successful.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent],
})
export class TransSuccessfulPage {
  recipient = '';
  recipientEmail = '';
  amount = '';
  currencySymbol = '₱';
  currencyCode = 'PHP';
  paymentMethod = 'gcash';
  paymentName = 'GCash';
  transferDate = '';
  referenceNumber = 'BF-284921';

  constructor() {
    this.loadTransferDetails();
  }

  loadTransferDetails() {
    const savedRecipient = localStorage.getItem('transferRecipient');

    const savedAmount = localStorage.getItem('transferAmount');

    const savedCurrencyCode = localStorage.getItem('transferCurrencyCode');

    const savedCurrencySymbol = localStorage.getItem('transferCurrencySymbol');

    const savedPaymentMethod = localStorage.getItem('transferPaymentMethod');

    if (savedRecipient) {
      this.recipient = savedRecipient;
      this.setRecipientEmail(savedRecipient);
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
      this.setPaymentMethodName(savedPaymentMethod);
    }

    this.transferDate = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }

  setRecipientEmail(recipient: string) {
    if (recipient === 'Maria Santos') {
      this.recipientEmail = 'maria@email.com';
    } else if (recipient === 'Juan Cruz') {
      this.recipientEmail = 'juan@email.com';
    } else if (recipient === 'Alex Reyes') {
      this.recipientEmail = 'alex@email.com';
    } else {
      this.recipientEmail = 'Recipient';
    }
  }

  setPaymentMethodName(method: string) {
    if (method === 'gcash') {
      this.paymentName = 'GCash';
    } else if (method === 'bank') {
      this.paymentName = 'Bank Account';
    } else if (method === 'card') {
      this.paymentName = 'Debit / Credit Card';
    }
  }

  goHome() {
    window.location.href = '/home';
  }
}
