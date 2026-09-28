import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';

import {
  sendOutline,
  arrowUpOutline,
  addOutline,
  listOutline,
  homeOutline,
  chatbubbleOutline,
  qrCodeOutline,
  swapHorizontalOutline,
  personOutline,
  notificationsOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon],
})
export class HomePage {
  constructor() {
    addIcons({
      'send-outline': sendOutline,
      'arrow-up-outline': arrowUpOutline,
      'add-outline': addOutline,
      'list-outline': listOutline,
      'home-outline': homeOutline,
      'chatbubble-outline': chatbubbleOutline,
      'qr-code-outline': qrCodeOutline,
      'swap-horizontal-outline': swapHorizontalOutline,
      'person-outline': personOutline,
      'notifications-outline': notificationsOutline,
    });
  }

  // =========================
  // SEND
  // =========================

  goToSend() {
    window.location.href = '/send';
  }

  // =========================
  // PAY
  // =========================

  goToPay() {
    window.location.href = '/pay';
  }

  // =========================
  // TOP UP
  // =========================

  goToTopUp() {
    window.location.href = '/top-up';
  }

  // =========================
  // QR GENERATOR
  // =========================

  goToQRGenerator() {
    window.location.href = '/qr-generator';
  }

  // =========================
  // HISTORY
  // =========================

  goToHistory() {
    window.location.href = '/history';
  }
  goToConvert() {
    window.location.href = '/convert';
  }
}
