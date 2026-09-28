import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.page.html',
  styleUrls: ['./qr-generator.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent],
})
export class QrGeneratorPage {
  qrCodeUrl = '';

  generateQR() {
    const paymentData = 'Swapp Payment';

    const encodedData = encodeURIComponent(paymentData);

    this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodedData}`;
  }

  shareQR() {
    if (!this.qrCodeUrl) {
      return;
    }

    if (navigator.share) {
      navigator.share({
        title: 'Swapp QR Code',
        text: 'Scan my Swapp QR code',
        url: this.qrCodeUrl,
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(this.qrCodeUrl);
    }
  }

  goBack() {
    window.location.href = '/home';
  }

  goHome() {
    window.location.href = '/home';
  }
}
