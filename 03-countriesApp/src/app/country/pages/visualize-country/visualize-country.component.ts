import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../components/interfaces/country.interface';
import { switchMap, tap } from 'rxjs/operators'; //permite recibir un observable y emitir otro

@Component({
  selector: 'app-visualize-country',
  templateUrl: './visualize-country.component.html',
  styles: [
  ]
})
export class VisualizeCountryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private CountryService: CountryService) { }

  country!: Country; //signo para que este obj puede ser null

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.CountryService.getCountryByAlpha(id)),
        tap(console.log) //imprime en consola lo que el producto (switchmap) reciba
      )
      .subscribe(country => this.country = country);

    /* 
          ANOTHER way to do that:
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    
    this.CountryService.getCountryByAlpha(params).subscribe(country => {
      console.log(country);
        });
      });
     */
  }

}
