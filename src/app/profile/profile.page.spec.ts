import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, 
  IonAvatar, IonIcon, IonList, IonItem, IonLabel, 
  IonButton, IonTabBar, IonTabButton 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  cellularOutline, wifiOutline, batteryFullOutline, cameraOutline, 
  checkmarkCircle, personOutline, shieldCheckmarkOutline, 
  notificationsOutline, helpCircleOutline, informationCircleOutline, 
  homeOutline, swapHorizontalOutline, receiptOutline, 
  trendingUpOutline, person 
} from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, 
    IonAvatar, IonIcon, IonList, IonItem, IonLabel, 
    IonButton, IonTabBar, IonTabButton
  ]
})
export class ProfilePage {
  constructor() {
    addIcons({
      cellularOutline, wifiOutline, batteryFullOutline, cameraOutline,
      checkmarkCircle, personOutline, shieldCheckmarkOutline,
      notificationsOutline, helpCircleOutline, informationCircleOutline,
      homeOutline, swapHorizontalOutline, receiptOutline,
      trendingUpOutline, person
    });
  }
}