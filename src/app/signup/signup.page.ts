import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent],
})
export class SignupPage {
  signupData = {
    fullName: '',
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  onSignup() {
    console.log('Signup form submitted:', this.signupData);

    // For now, go to Home after signing up
    this.router.navigate(['/home']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
