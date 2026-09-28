import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { IonContent, IonToggle } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  arrowBackOutline, 
  shieldCheckmarkOutline, 
  phonePortraitOutline, 
  chatbubbleEllipsesOutline, 
  chevronForwardOutline, 
  checkmarkCircle 
} from 'ionicons/icons';

@Component({
  selector: 'app-two-factor',
  templateUrl: './two-factor.page.html',
  styleUrls: ['./two-factor.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonToggle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwoFactorPage {
  twoFactorEnabled = true;
  selectedMethod: 'app' | 'sms' = 'app';

  constructor(private location: Location) {
    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'shield-checkmark-outline': shieldCheckmarkOutline,
      'phone-portrait-outline': phonePortraitOutline,
      'chatbubble-ellipses-outline': chatbubbleEllipsesOutline,
      'chevron-forward-outline': chevronForwardOutline,
      'checkmark-circle': checkmarkCircle
    });
  }

  goBack(): void {
    this.location.back();
  }

  toggleTwoFactor(event: CustomEvent): void {
    this.twoFactorEnabled = event.detail.checked;
  }

  selectMethod(method: 'app' | 'sms'): void {
    this.selectedMethod = method;
  }

  saveSettings(): void {
    console.log('Saved 2FA Preferences:', {
      enabled: this.twoFactorEnabled,
      method: this.selectedMethod
    });
    this.goBack();
  }
}