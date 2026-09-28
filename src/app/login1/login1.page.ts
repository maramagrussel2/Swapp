import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

interface Country {
  name: string;
  code: string;
  flag: string;
}

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent],
})
export class Login1Page {
  /* =========================
     MOBILE NUMBER
  ========================== */

  mobileNumber = '';

  /* =========================
     COUNTRY DROPDOWN
  ========================== */

  showCountryList = false;

  /* =========================
     SELECTED COUNTRY
  ========================== */

  selectedCountry: Country = {
    name: 'Philippines',
    code: '+63',
    flag: '🇵🇭',
  };

  /* =========================
     COUNTRIES
  ========================== */

  countries: Country[] = [
    {
      name: 'Philippines',
      code: '+63',
      flag: '🇵🇭',
    },

    {
      name: 'United States',
      code: '+1',
      flag: '🇺🇸',
    },

    {
      name: 'Canada',
      code: '+1',
      flag: '🇨🇦',
    },

    {
      name: 'United Kingdom',
      code: '+44',
      flag: '🇬🇧',
    },

    {
      name: 'Japan',
      code: '+81',
      flag: '🇯🇵',
    },

    {
      name: 'South Korea',
      code: '+82',
      flag: '🇰🇷',
    },

    {
      name: 'China',
      code: '+86',
      flag: '🇨🇳',
    },

    {
      name: 'Singapore',
      code: '+65',
      flag: '🇸🇬',
    },

    {
      name: 'Malaysia',
      code: '+60',
      flag: '🇲🇾',
    },

    {
      name: 'Indonesia',
      code: '+62',
      flag: '🇮🇩',
    },

    {
      name: 'Thailand',
      code: '+66',
      flag: '🇹🇭',
    },

    {
      name: 'Vietnam',
      code: '+84',
      flag: '🇻🇳',
    },

    {
      name: 'Australia',
      code: '+61',
      flag: '🇦🇺',
    },

    {
      name: 'New Zealand',
      code: '+64',
      flag: '🇳🇿',
    },

    {
      name: 'India',
      code: '+91',
      flag: '🇮🇳',
    },

    {
      name: 'United Arab Emirates',
      code: '+971',
      flag: '🇦🇪',
    },

    {
      name: 'Saudi Arabia',
      code: '+966',
      flag: '🇸🇦',
    },

    {
      name: 'Germany',
      code: '+49',
      flag: '🇩🇪',
    },

    {
      name: 'France',
      code: '+33',
      flag: '🇫🇷',
    },

    {
      name: 'Italy',
      code: '+39',
      flag: '🇮🇹',
    },

    {
      name: 'Spain',
      code: '+34',
      flag: '🇪🇸',
    },

    {
      name: 'Brazil',
      code: '+55',
      flag: '🇧🇷',
    },

    {
      name: 'Mexico',
      code: '+52',
      flag: '🇲🇽',
    },

    {
      name: 'South Africa',
      code: '+27',
      flag: '🇿🇦',
    },

    {
      name: 'Russia',
      code: '+7',
      flag: '🇷🇺',
    },

    {
      name: 'Switzerland',
      code: '+41',
      flag: '🇨🇭',
    },
  ];

  /* =========================
     OPEN / CLOSE COUNTRY LIST
  ========================== */

  toggleCountryList() {
    this.showCountryList = !this.showCountryList;
  }

  /* =========================
     SELECT COUNTRY
  ========================== */

  selectCountry(country: Country) {
    this.selectedCountry = country;

    this.showCountryList = false;

    this.mobileNumber = '';
  }

  /* =========================
     CONTINUE
  ========================== */

  goToLogin2() {
    if (this.mobileNumber.trim().length > 0) {
      window.location.href = '/login2';
    }
  }

  /* =========================
     BACK
  ========================== */

  goBack() {
    window.location.href = '/onboarding';
  }
}
