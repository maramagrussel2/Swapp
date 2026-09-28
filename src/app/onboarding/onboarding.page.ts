import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonButton],
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage {
  slides = [
    {
      title: 'Welcome to Swapp',
      text: 'Swap, trade, and connect with people around you.',
    },
    {
      title: 'Safe and Secure',
      text: 'Your transactions are protected every step of the way.',
    },
    {
      title: 'Get Started Today',
      text: 'Create your account in less than a minute.',
    },
  ];

  current = 0;

  get translateX(): string {
    return `translateX(-${this.current * 100}%)`;
  }

  nextSlide() {
    if (this.current < this.slides.length - 1) this.current++;
  }
}
