import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  notificationsOutline,
  mailOutline,
  pricetagOutline,
  shieldCheckmarkOutline,
  homeOutline,
  chatbubbleOutline,
  qrCodeOutline,
  swapHorizontalOutline,
  personOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotificationPage {
  pushNotifications = true;
  emailNotifications = false;
  promoUpdates = true;
  securityAlerts = true;

  constructor(private router: Router) {
    addIcons({
      'chevron-back-outline': chevronBackOutline,
      'notifications-outline': notificationsOutline,
      'mail-outline': mailOutline,
      'pricetag-outline': pricetagOutline,
      'shield-checkmark-outline': shieldCheckmarkOutline,
      'home-outline': homeOutline,
      'chatbubble-outline': chatbubbleOutline,
      'qr-code-outline': qrCodeOutline,
      'swap-horizontal-outline': swapHorizontalOutline,
      'person-outline': personOutline
    });
  }

  goBack(): void {
    this.router.navigate(['/profile']);
  }

  toggleSetting(key: 'push' | 'email' | 'promo' | 'security'): void {
    if (key === 'push') this.pushNotifications = !this.pushNotifications;
    if (key === 'email') this.emailNotifications = !this.emailNotifications;
    if (key === 'promo') this.promoUpdates = !this.promoUpdates;
    if (key === 'security') this.securityAlerts = !this.securityAlerts;
  }

  savePreferences(): void {
    // Log or handle backend API updates here
    console.log('Saved Preferences:', {
      pushNotifications: this.pushNotifications,
      emailNotifications: this.emailNotifications,
      promoUpdates: this.promoUpdates,
      securityAlerts: this.securityAlerts
    });

    // Navigate back to profile after saving
    this.router.navigate(['/profile']);
  }
}