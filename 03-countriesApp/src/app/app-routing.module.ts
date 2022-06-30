import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ByCapitalCityComponent } from "./country/pages/by-capital-city/by-capital-city.component";
import { ByCountryComponent } from "./country/pages/by-country/by-country.component";
import { ByRegionComponent } from "./country/pages/by-region/by-region.component";
import { VisualizeCountryComponent } from "./country/pages/visualize-country/visualize-country.component";

//Main routes of the app
const routes: Routes = [
  {
    path: '', //index page
    component: ByCountryComponent, //component to show
    pathMatch: 'full' //math the path exacly
  },
  {
    path: 'region',
    component: ByRegionComponent
  },
  {
    path: 'capital',
    component: ByCapitalCityComponent
  },
  {
    path: 'country/:id',
    component: VisualizeCountryComponent
  },
  {
    path: '**', //any other route
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) //we can have only this one for main routes
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }