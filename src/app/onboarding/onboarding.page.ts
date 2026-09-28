import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent]
})
export class OnboardingPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}