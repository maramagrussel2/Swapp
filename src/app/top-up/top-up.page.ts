import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.page.html',
  styleUrls: ['./top-up.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent],
})
export class TopUpPage {
  selectedAmount = 0;
  customAmount = '';
  paymentMethod = '';

  // =========================
  // SELECT AMOUNT
  // =========================

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.customAmount = '';
  }

  // =========================
  // SELECT PAYMENT METHOD
  // =========================

  selectPaymentMethod(method: string) {
    this.paymentMethod = method;
  }

  // =========================
  // SELECT BANK TRANSFER
  // =========================

  goToBankTransfer() {
    this.paymentMethod = 'bank';
  }

  // =========================
  // CONTINUE
  // =========================

  topUp() {
    const amount = this.customAmount
      ? Number(this.customAmount)
      : this.selectedAmount;

    console.log('Top Up Amount:', amount);
    console.log('Payment Method:', this.paymentMethod);

    // Make sure amount and payment method are selected

    if (!amount || !this.paymentMethod) {
      return;
    }

    // Save top-up information

    localStorage.setItem('topUpAmount', amount.toString());

    localStorage.setItem('topUpPaymentMethod', this.paymentMethod);

    // =========================
    // BANK TRANSFER
    // =========================

    if (this.paymentMethod === 'bank') {
      window.location.href = '/bank-transfer';

      return;
    }

    // =========================
    // DEBIT / CREDIT CARD
    // =========================

    if (this.paymentMethod === 'card') {
      window.location.href = '/debit-credit-card';

      return;
    }

    // =========================
    // E-WALLET
    // =========================

    if (this.paymentMethod === 'ewallet') {
      console.log('E-Wallet selected');

      return;
    }

    // =========================
    // CONVENIENCE STORE
    // =========================

    if (this.paymentMethod === 'store') {
      console.log('Convenience Store selected');

      return;
    }
  }

  // =========================
  // BACK
  // =========================

  goBack() {
    window.location.href = '/home';
  }
}
