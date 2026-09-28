import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { IonContent } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline, pencil } from 'ionicons/icons';

@Component({
  selector: 'app-edit-personal-info',
  templateUrl: './edit-personal-info.page.html',
  styleUrls: ['./edit-personal-info.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditPersonalInfoPage {
  constructor(private location: Location) {
    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'pencil': pencil
    });
  }

  goBack(): void {
    this.location.back();
  }
}