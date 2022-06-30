import { Component, Input } from '@angular/core';
import { Country } from '../../components/interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  constructor(private countryService: CountryService) { }

  term: string = '';
  errorAlert: boolean = false;
  countries: Country[] = [];

  search(term: string) {
    this.errorAlert = false;
    this.term = term;

    this.countryService.searchCountry(term)
      .subscribe(resp => { //subscribe porque es un observable
        this.countries = resp;
      }, (err) => {
        this.errorAlert = true;
        this.countries = [];
      });
  }

  suggestions(term: string) {
    this.errorAlert = false;
    //TODO: crear sugerencias
  }

}
