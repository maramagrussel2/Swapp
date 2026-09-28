import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent]
})
export class LoginPage implements OnInit {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  onLogin() {
    console.log('Logging in with:', this.loginData);
    // Add authentication logic here
    // e.g., this.router.navigate(['/tabs']);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}