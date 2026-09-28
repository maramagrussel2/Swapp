import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  arrowBackOutline, 
  lockClosedOutline, 
  shieldCheckmarkOutline, 
  timeOutline, 
  chevronForwardOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-security',
  templateUrl: './security.page.html',
  styleUrls: ['./security.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecurityPage {
  constructor(
    private location: Location,
    private router: Router
  ) {
    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'lock-closed-outline': lockClosedOutline,
      'shield-checkmark-outline': shieldCheckmarkOutline,
      'time-outline': timeOutline,
      'chevron-forward-outline': chevronForwardOutline
    });
  }

  goBack(): void {
    this.location.back();
  }

  goToChangePassword(): void {
    this.router.navigate(['/profile/security/change-pass']);
  }

  goToTwoFactor(): void {
    this.router.navigate(['/profile/security/two-factor']);
  }

  goToLoginSessions(): void {
  this.router.navigate(['/profile/security/login-sess']);
}

  logOutAllDevices(): void {
    // Action to handle log out from all devices
  }
}