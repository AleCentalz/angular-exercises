import { Component, Input } from '@angular/core';
import { Country } from '../../components/interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html'
})
export class CountryTableComponent {

  @Input() countries: Country[] = [];

  constructor(private countryService: CountryService) { }




}
