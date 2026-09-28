import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-debit-credit-card',
  templateUrl: './debit-credit-card.page.html',
  styleUrls: ['./debit-credit-card.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent],
})
export class DebitCreditCardPage {
  cardNumber = '';
  expiryDate = '';
  cvv = '';
  cardholderName = '';

  addCard() {
    window.location.href = '/transfer-review';
  }

  goBack() {
    window.location.href = '/top-up';
  }
}
