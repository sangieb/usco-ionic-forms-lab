import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonList, IonItem, IonLabel, IonAvatar
} from '@ionic/angular/standalone';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: 'countries.component.html',
  standalone: true,
  imports: [CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
            IonList, IonItem, IonLabel, IonAvatar]
})
export class CountriesComponent implements OnInit {
  private countryService = inject(CountryService);
  countries: any[] = [];

  ngOnInit() {
    this.countryService.getCountries().subscribe({
      next: (data) => this.countries = data,
      error: (err) => console.error('Error:', err)
    });
  }
}