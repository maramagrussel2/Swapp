import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-bank-transfer',
  templateUrl: './bank-transfer.page.html',
  styleUrls: ['./bank-transfer.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent],
})
export class BankTransferPage {
  searchTerm = '';
  selectedBank = '';

  constructor(private router: Router) {}

  // =========================
  // SEARCH
  // =========================

  matchesSearch(bankName: string): boolean {
    if (!this.searchTerm.trim()) {
      return true;
    }

    return bankName
      .toLowerCase()
      .includes(this.searchTerm.toLowerCase().trim());
  }

  // =========================
  // SELECT BANK
  // =========================

  selectBank(bank: string) {
    this.selectedBank = bank;
  }

  // =========================
  // CONTINUE
  // =========================

  continueBank() {
    if (!this.selectedBank) {
      return;
    }

    localStorage.setItem('topUpBank', this.selectedBank);

    window.location.href = '/bank-transfer-details';
  }

  // =========================
  // BACK
  // =========================

  goBack() {
    window.location.href = '/top-up';
  }
}
