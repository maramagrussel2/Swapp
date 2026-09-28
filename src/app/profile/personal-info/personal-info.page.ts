import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  personOutline,
  mailOutline,
  callOutline,
  camera,
  person,
  pencilOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonalInfoPage {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  profileImage: string | ArrayBuffer | null = null;
  
  isEditing: boolean = false;

  fullName: string = 'Juan Dela Cruz';
  email: string = 'juan.delacruz@example.com';
  phone: string = '0918 987 6543';

  constructor(private router: Router) {
    addIcons({
      'chevron-back-outline': chevronBackOutline,
      'person-outline': personOutline,
      'mail-outline': mailOutline,
      'call-outline': callOutline,
      camera,
      person,
      'pencil-outline': pencilOutline
    });
  }

  triggerFileInput(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.profileImage = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  goBack(): void {
    this.router.navigate(['/profile']);
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }
}