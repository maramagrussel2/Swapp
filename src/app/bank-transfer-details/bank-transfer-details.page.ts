import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-bank-transfer-details',
  templateUrl: './bank-transfer-details.page.html',
  styleUrls: ['./bank-transfer-details.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent],
})
export class BankTransferDetailsPage {
  bankName = 'BDO Unibank, Inc.';
  bankInitial = 'BDO';

  accountName = '';
  accountNumber = '';
  amount = '';

  constructor() {
    this.loadBankDetails();
  }

  // =========================
  // LOAD SELECTED BANK
  // =========================

  loadBankDetails() {
    const savedBank = localStorage.getItem('topUpBank');

    if (!savedBank) {
      return;
    }

    switch (savedBank) {
      case 'bdo':
      case 'bdo-saved':
        this.bankName = 'BDO Unibank, Inc.';
        this.bankInitial = 'BDO';
        break;

      case 'bpi':
        this.bankName = 'Bank of the Philippine Islands';
        this.bankInitial = 'BPI';
        break;

      case 'metrobank':
        this.bankName = 'Metrobank';
        this.bankInitial = 'M';
        break;

      case 'unionbank':
        this.bankName = 'UnionBank of the Philippines';
        this.bankInitial = 'UB';
        break;

      case 'landbank':
        this.bankName = 'Land Bank of the Philippines';
        this.bankInitial = 'LB';
        break;

      case 'chinabank':
        this.bankName = 'Chinabank';
        this.bankInitial = 'C';
        break;

      case 'eastwest':
        this.bankName = 'EastWest Bank';
        this.bankInitial = 'EW';
        break;

      case 'pnb':
        this.bankName = 'Philippine National Bank';
        this.bankInitial = 'PNB';
        break;
    }

    // Load selected top-up amount

    const savedAmount = localStorage.getItem('topUpAmount');

    if (savedAmount) {
      this.amount = savedAmount;
    }
  }

  // =========================
  // CONTINUE
  // =========================

  continueTransfer() {
    if (!this.accountName || !this.accountNumber || !this.amount) {
      return;
    }

    localStorage.setItem('bankAccountName', this.accountName);

    localStorage.setItem('bankAccountNumber', this.accountNumber);

    localStorage.setItem('bankTransferAmount', this.amount);

    console.log('Bank:', this.bankName);

    console.log('Account Name:', this.accountName);

    console.log('Account Number:', this.accountNumber);

    console.log('Amount:', this.amount);

    // Next page will be added after this

    window.location.href = '/bank-transfer-review';
  }

  // =========================
  // BACK
  // =========================

  goBack() {
    window.location.href = '/bank-transfer';
  }
}
