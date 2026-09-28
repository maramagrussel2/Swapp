import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  chevronForwardOutline,
  sparklesOutline,
  starOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-about-splash',
  templateUrl: './about-splash.page.html',
  styleUrls: ['./about-splash.page.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutSplashPage {
  constructor(private router: Router) {
    addIcons({
      'chevron-back-outline': chevronBackOutline,
      'chevron-forward-outline': chevronForwardOutline,
      'sparkles-outline': sparklesOutline,
      'star-outline': starOutline
    });
  }

  goBack(): void {
    this.router.navigate(['/profile']);
  }

  goToWhatsNew(): void {
    this.router.navigate(['/profile/about-splash/whats-new']);
  }

  rateApp(): void {
    console.log('Opening rating dialog / app store review...');
  }
}