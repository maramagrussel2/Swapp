import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  chevronForwardOutline,
  helpCircleOutline,
  headsetOutline,
  shieldCheckmarkOutline,
  documentTextOutline,
  playCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.page.html',
  styleUrls: ['./help-center.page.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpCenterPage {
  helpOptions = [
    { title: 'FAQs', icon: 'help-circle-outline', route: '/profile/help-center/faqs' },
    { title: 'Contact Support', icon: 'headset-outline', route: '/profile/help-center/contact' },
    { title: 'Privacy Policy', icon: 'shield-checkmark-outline', route: '/profile/help-center/privacy' },
    { title: 'Terms of Service', icon: 'document-text-outline', route: '/profile/help-center/terms' },
    { title: 'App Tutorial', icon: 'play-circle-outline', route: '/profile/help-center/tutorial' }
  ];

  constructor(private router: Router) {
    addIcons({
      'chevron-back-outline': chevronBackOutline,
      'chevron-forward-outline': chevronForwardOutline,
      'help-circle-outline': helpCircleOutline,
      'headset-outline': headsetOutline,
      'shield-checkmark-outline': shieldCheckmarkOutline,
      'document-text-outline': documentTextOutline,
      'play-circle-outline': playCircleOutline
    });
  }

  goBack(): void {
    this.router.navigate(['/profile']);
  }

  navigateToOption(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }
}