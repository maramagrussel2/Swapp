import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  person,
  camera,
  checkmarkCircle,
  personOutline,
  chevronForwardOutline,
  shieldCheckmarkOutline,
  notificationsOutline,
  helpCircleOutline,
  informationCircleOutline,
  qrCodeOutline,
  homeOutline,
  chatbubbleOutline,
  swapHorizontalOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePage {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  profileImage: string | ArrayBuffer | null = null;

  constructor(private router: Router) {
    addIcons({
      person,
      camera,
      'checkmark-circle': checkmarkCircle,
      'person-outline': personOutline,
      'chevron-forward-outline': chevronForwardOutline,
      'shield-checkmark-outline': shieldCheckmarkOutline,
      'notifications-outline': notificationsOutline,
      'help-circle-outline': helpCircleOutline,
      'information-circle-outline': informationCircleOutline,
      'qr-code-outline': qrCodeOutline,
      'home-outline': homeOutline,
      'chatbubble-outline': chatbubbleOutline,
      'swap-horizontal-outline': swapHorizontalOutline
    });
  }

  triggerFileInput(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.profileImage = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  goToPersonalInfo(): void {
    this.router.navigate(['/profile/personal-info']);
  }

  goToEditInfo(): void {
    this.router.navigate(['/profile/edit-info']);
  }

  goToSecurity(): void {
    this.router.navigate(['/profile/security']);
  }

  goToNotifications(): void {
    this.router.navigate(['/profile/notification']);
  }

  goToHelpCenter(): void {
    this.router.navigate(['/profile/help-center']);
  }

  goToAboutSplash(): void {
    this.router.navigate(['/profile/about-splash']);
  }

  logout(): void {
    console.log('Logging out...');
  }
}