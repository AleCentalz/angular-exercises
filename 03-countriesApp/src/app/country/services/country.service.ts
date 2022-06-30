import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../components/interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  //APi from: https://restcountries.com/#api-endpoints-v3-name
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url); //return an observable
    //return this.http.get(url).pipe(catchError(err => of(['hola'])));
  }
  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }


}
