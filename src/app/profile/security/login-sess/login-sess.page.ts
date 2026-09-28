import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { IonContent, IonButton } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  arrowBackOutline, 
  desktopOutline, 
  phonePortraitOutline, 
  closeCircleOutline 
} from 'ionicons/icons';

interface Session {
  id: string;
  deviceName: string;
  deviceType: 'desktop' | 'mobile';
  location: string;
  ipAddress: string;
  lastActive: string;
}

@Component({
  selector: 'app-login-sess',
  templateUrl: './login-sess.page.html',
  styleUrls: ['./login-sess.page.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, IonContent, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginSessPage {
  currentSession: Session = {
    id: 's1',
    deviceName: 'Windows PC (Chrome)',
    deviceType: 'desktop',
    location: 'Vigan City, PH',
    ipAddress: '112.204.45.12',
    lastActive: 'Now'
  };

  otherSessions: Session[] = [
    {
      id: 's2',
      deviceName: 'iPhone 15 Pro',
      deviceType: 'mobile',
      location: 'Manila, PH',
      ipAddress: '112.204.88.90',
      lastActive: '2 hours ago'
    },
    {
      id: 's3',
      deviceName: 'MacBook Air (Safari)',
      deviceType: 'desktop',
      location: 'Quezon City, PH',
      ipAddress: '180.191.12.34',
      lastActive: '3 days ago'
    }
  ];

  constructor(private location: Location) {
    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'desktop-outline': desktopOutline,
      'phone-portrait-outline': phonePortraitOutline,
      'close-circle-outline': closeCircleOutline
    });
  }

  goBack(): void {
    this.location.back();
  }

  revokeSession(sessionId: string): void {
    this.otherSessions = this.otherSessions.filter(s => s.id !== sessionId);
  }

  logoutAllOtherDevices(): void {
    this.otherSessions = [];
  }
}