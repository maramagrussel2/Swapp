import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

interface Currency {
  name: string;
  code: string;
  flag: string;
  symbol: string;
}

interface Recipient {
  name: string;
  number: string;
  email: string;
}

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent],
})
export class SendPage {
  @ViewChild('mobileNumberInput')
  mobileNumberInput!: ElementRef<HTMLInputElement>;

  @ViewChild('amountInput')
  amountInput!: ElementRef<HTMLInputElement>;

  // =========================
  // RECIPIENT
  // =========================

  selectedRecipient = '';

  recipientNumber = '';

  // =========================
  // AMOUNT
  // =========================

  amount: number | null = null;

  // =========================
  // CURRENCY
  // =========================

  showCurrencyList = false;

  selectedCurrency: Currency = {
    name: 'Philippine Peso',
    code: 'PHP',
    flag: '🇵🇭',
    symbol: '₱',
  };

  currencies: Currency[] = [
    {
      name: 'Philippine Peso',
      code: 'PHP',
      flag: '🇵🇭',
      symbol: '₱',
    },
    {
      name: 'US Dollar',
      code: 'USD',
      flag: '🇺🇸',
      symbol: '$',
    },
    {
      name: 'Euro',
      code: 'EUR',
      flag: '🇪🇺',
      symbol: '€',
    },
    {
      name: 'Japanese Yen',
      code: 'JPY',
      flag: '🇯🇵',
      symbol: '¥',
    },
    {
      name: 'British Pound',
      code: '🇬🇧',
      flag: '🇬🇧',
      symbol: '£',
    },
  ];

  // =========================
  // RECIPIENT DATA
  // =========================

  recipients: Recipient[] = [
    {
      name: 'Maria Santos',
      number: '9171234567',
      email: 'maria@email.com',
    },

    {
      name: 'Juan Cruz',
      number: '9187654321',
      email: 'juan@email.com',
    },

    {
      name: 'Alex Reyes',
      number: '9054321987',
      email: 'alex@email.com',
    },

    {
      name: 'Kyle',
      number: '9276543210',
      email: 'kyle@email.com',
    },

    {
      name: 'Sarah',
      number: '9981234567',
      email: 'sarah@email.com',
    },
  ];

  // =========================
  // SELECT RECIPIENT
  // =========================

  selectRecipient(name: string) {
    const recipient = this.recipients.find((item) => item.name === name);

    if (!recipient) {
      return;
    }

    // Select recipient
    this.selectedRecipient = recipient.name;

    // Automatically place their number
    // inside the Mobile Number input
    this.recipientNumber = recipient.number;

    // Automatically move focus to Amount
    setTimeout(() => {
      if (this.amountInput) {
        this.amountInput.nativeElement.focus();
      }
    }, 150);
  }

  // =========================
  // CURRENCY DROPDOWN
  // =========================

  toggleCurrencyList() {
    this.showCurrencyList = !this.showCurrencyList;
  }

  // =========================
  // SELECT CURRENCY
  // =========================

  selectCurrency(currency: Currency) {
    this.selectedCurrency = currency;

    this.showCurrencyList = false;
  }

  // =========================
  // CHECK AMOUNT
  // =========================

  checkAmount() {
    if (this.amount !== null && this.amount > 0) {
      // Valid amount
    }
  }

  // =========================
  // SEND MONEY
  // =========================

  sendMoney() {
    if (!this.selectedRecipient || !this.recipientNumber || !this.amount) {
      return;
    }

    const recipient = this.recipients.find(
      (item) => item.name === this.selectedRecipient,
    );

    // Save recipient
    localStorage.setItem('transferRecipient', this.selectedRecipient);

    // Save mobile number
    localStorage.setItem('transferNumber', this.recipientNumber);

    // Save amount
    localStorage.setItem('transferAmount', this.amount.toString());

    // Save currency
    localStorage.setItem('transferCurrency', this.selectedCurrency.code);

    // Save currency symbol
    localStorage.setItem(
      'transferCurrencySymbol',
      this.selectedCurrency.symbol,
    );

    // Save email
    if (recipient) {
      localStorage.setItem('transferEmail', recipient.email);
    }

    // Continue to Payment Method
    window.location.href = '/payment-method';
  }

  // =========================
  // BACK
  // =========================

  goBack() {
    window.location.href = '/home';
  }
}
