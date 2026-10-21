import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.restcountries.com/countries/v5?limit=100';
  private apiKey = 'rc_live_ad7b1a4ef9dd4e13b67553ddc78e6d1d';

  getCountries(): Observable<any[]> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${this.apiKey}` });
    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      map((res) => res.data.objects)
    );
  }
}