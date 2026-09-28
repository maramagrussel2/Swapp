import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  homeOutline,
  chatbubbleOutline,
  swapHorizontalOutline,
  personOutline,
  qrCodeOutline,
} from 'ionicons/icons';

interface Currency {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-convert',
  templateUrl: './convert.page.html',
  styleUrls: ['./convert.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonIcon],
})
export class ConvertPage {
  amount: number | null = null;

  fromCurrency = 'PHP';
  toCurrency = 'USD';

  convertedAmount = '';

  showFromCurrency = false;
  showToCurrency = false;

  currencies: Currency[] = [
    {
      code: 'PHP',
      name: 'Philippine Peso',
      flag: '🇵🇭',
    },

    {
      code: 'USD',
      name: 'US Dollar',
      flag: '🇺🇸',
    },

    {
      code: 'EUR',
      name: 'Euro',
      flag: '🇪🇺',
    },

    {
      code: 'JPY',
      name: 'Japanese Yen',
      flag: '🇯🇵',
    },

    {
      code: 'GBP',
      name: 'British Pound',
      flag: '🇬🇧',
    },

    {
      code: 'SGD',
      name: 'Singapore Dollar',
      flag: '🇸🇬',
    },
  ];

  /*
   * Prototype exchange rates.
   * These are sample rates for the UI/demo.
   */

  rates: {
    [key: string]: number;
  } = {
    'PHP-USD': 0.0177,
    'USD-PHP': 56.5,

    'PHP-EUR': 0.015,
    'EUR-PHP': 66.7,

    'PHP-JPY': 2.61,
    'JPY-PHP': 0.383,

    'PHP-GBP': 0.0132,
    'GBP-PHP': 75.75,

    'PHP-SGD': 0.0229,
    'SGD-PHP': 43.7,

    'USD-EUR': 0.85,
    'EUR-USD': 1.1765,

    'USD-JPY': 147.5,
    'JPY-USD': 0.00678,

    'USD-GBP': 0.758,
    'GBP-USD': 1.3193,

    'USD-SGD': 1.29,
    'SGD-USD': 0.7752,
  };

  constructor() {
    addIcons({
      'home-outline': homeOutline,
      'chatbubble-outline': chatbubbleOutline,
      'swap-horizontal-outline': swapHorizontalOutline,
      'person-outline': personOutline,
      'qr-code-outline': qrCodeOutline,
    });
  }

  toggleFromCurrency() {
    this.showFromCurrency = !this.showFromCurrency;

    this.showToCurrency = false;
  }

  toggleToCurrency() {
    this.showToCurrency = !this.showToCurrency;

    this.showFromCurrency = false;
  }

  selectFromCurrency(currency: string) {
    this.fromCurrency = currency;

    this.showFromCurrency = false;

    this.convertedAmount = '';
  }

  selectToCurrency(currency: string) {
    this.toCurrency = currency;

    this.showToCurrency = false;

    this.convertedAmount = '';
  }

  swapCurrencies() {
    const oldFrom = this.fromCurrency;

    this.fromCurrency = this.toCurrency;

    this.toCurrency = oldFrom;

    this.convertedAmount = '';
  }

  getRate(): number {
    if (this.fromCurrency === this.toCurrency) {
      return 1;
    }

    const key = `${this.fromCurrency}-${this.toCurrency}`;

    return this.rates[key] || 1;
  }

  convert() {
    if (this.amount === null || this.amount <= 0) {
      this.convertedAmount = '';

      return;
    }

    const result = this.amount * this.getRate();

    this.convertedAmount = result.toFixed(2);
  }

  getFlag(code: string): string {
    const currency = this.currencies.find((item) => item.code === code);

    return currency ? currency.flag : '💱';
  }

  goBack() {
    window.location.href = '/home';
  }

  goHome() {
    window.location.href = '/home';
  }

  goToQRGenerator() {
    window.location.href = '/qr-generator';
  }
}
