import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonInput, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonInput, IonIcon],
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page {
  mobileNumber = '';

  constructor(private router: Router) {
    addIcons({ arrowBack });
  }

  get isValid(): boolean {
    return this.mobileNumber.length === 10;
  }

  goToMpin() {
    if (!this.isValid) return;
    this.router.navigate(['/login2'], {
      queryParams: { mobile: '+63 ' + this.mobileNumber },
    });
  }

  goBack() {
    this.router.navigate(['/onboarding']);
  }
}
