import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent]
})
export class VerifyEmailPage implements OnInit {
  // Fixes TS2339: userEmail
  userEmail = 'juandelacruz@gmail.com';

  constructor(private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/signup']);
  }

  // Fixes TS2339: onOpenEmailApp
  onOpenEmailApp() {
    this.router.navigate(['/home']);
  }

  // Fixes TS2339: onResendEmail
  onResendEmail() {
    console.log('Resending verification email to:', this.userEmail);
  }
}