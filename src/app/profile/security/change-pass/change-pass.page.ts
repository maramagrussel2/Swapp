import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  Validators, 
  AbstractControl, 
  ValidationErrors 
} from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.page.html',
  styleUrls: ['./change-pass.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent,
    IonButton
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChangePasswordPage {
  passwordForm: FormGroup;

  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  constructor(
    private location: Location,
    private fb: FormBuilder
  ) {
    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'eye-outline': eyeOutline,
      'eye-off-outline': eyeOffOutline
    });

    this.passwordForm = this.fb.group(
      {
        currentPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }

  toggleShowCurrent(): void {
    this.showCurrentPassword = !this.showCurrentPassword;
  }

  toggleShowNew(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleShowConfirm(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      console.log('Password successfully changed');
      this.goBack();
    }
  }
}