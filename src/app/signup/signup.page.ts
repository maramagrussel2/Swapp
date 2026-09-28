import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent]
})
export class SignupPage implements OnInit {
  // 1. Step control property
  currentStep = 1;

  // 2. Form Model
  formData = {
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false
  };

  // 3. UI Toggles
  showPassword = false;
  showConfirmPassword = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  // Password Visibility Toggle Handlers
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  // Navigation Logic
  goBack() {
    if (this.currentStep > 1) {
      this.currentStep--;
    } else {
      this.router.navigate(['/onboarding']);
    }
  }

  // Step 1 Validation Check
  isStep1Valid(): boolean {
    return (
      this.formData.fullName.trim() !== '' &&
      this.formData.email.trim() !== '' &&
      this.formData.mobileNumber.trim() !== '' &&
      this.formData.password.length >= 6 &&
      this.formData.password === this.formData.confirmPassword &&
      this.formData.agreedToTerms
    );
  }

  // Action for Step 1 -> Move to Step 2
  onSubmitStep1() {
    if (this.isStep1Valid()) {
      this.currentStep = 2;
    }
  }

  // Action for Step 2 -> Navigate to Dashboard Home
  onVerifyEmail() {
    this.router.navigate(['/home']);
  }
}