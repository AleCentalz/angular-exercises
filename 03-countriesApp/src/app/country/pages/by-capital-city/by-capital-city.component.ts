import { Component, OnInit } from '@angular/core';
import { Country } from '../../components/interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-city',
  templateUrl: './by-capital-city.component.html',
  styles: [
  ]
})
export class ByCapitalCityComponent {
  term: string = '';
  errorAlert: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(term: string) {
    this.errorAlert = false;
    this.term = term;

    this.countryService.searchCapital(term)
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
