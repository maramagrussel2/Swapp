import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonButton],
})
export class OnboardingPage {
  constructor(private router: Router) {}

  goToSignup() {
    window.location.href = '/signup';
  }

  goToLogin1() {
    window.location.href = '/login1';
  }
}
