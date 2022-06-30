import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ByCapitalCityComponent } from './pages/by-capital-city/by-capital-city.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { VisualizeCountryComponent } from './pages/visualize-country/visualize-country.component';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './component/country-table/country-table.component';
import { CountryInputComponent } from './component/country-input/country-input.component';




@NgModule({
  declarations: [
    ByCapitalCityComponent,
    ByCountryComponent,
    ByRegionComponent,
    VisualizeCountryComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  exports: [
    ByCapitalCityComponent,
    ByCountryComponent,
    ByRegionComponent,
    VisualizeCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule //in order to use routerLink in an a tag
  ]
})
export class CountryModule { }
