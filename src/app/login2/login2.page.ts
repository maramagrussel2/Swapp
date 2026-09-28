import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonIcon, ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBack, backspaceOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon],
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {
  mobile = '';
  mpin: string[] = [];
  readonly maxLength = 4;

  keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'back'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
  ) {
    addIcons({ arrowBack, backspaceOutline });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((p) => (this.mobile = p['mobile'] || ''));
  }

  get dots(): number[] {
    return Array(this.maxLength).fill(0);
  }

  press(key: string) {
    if (key === 'back') {
      this.mpin.pop();
      return;
    }
    if (!key || this.mpin.length >= this.maxLength) return;

    this.mpin.push(key);

    if (this.mpin.length === this.maxLength) {
      setTimeout(() => this.submitMpin(), 150);
    }
  }

  async submitMpin() {
    console.log('MPIN:', this.mpin.join(''), 'Mobile:', this.mobile);

    const toast = await this.toastCtrl.create({
      message: 'Login successful!',
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    await toast.present();

    this.mpin = [];
  }

  goBack() {
    this.router.navigate(['/login1']);
  }
}
