import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent],
})
export class Login2Page {
  mpin = '';

  addDigit(digit: string) {
    if (this.mpin.length < 4) {
      this.mpin += digit;
    }
  }

  clearMpin() {
    this.mpin = '';
  }

  login() {
    if (this.mpin.length === 4) {
      window.location.href = '/home';
    }
  }

  goBack() {
    window.location.href = '/login1';
  }
}
