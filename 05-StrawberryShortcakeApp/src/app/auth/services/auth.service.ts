import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private baseUrl: string = environment.baseURL;
private _auth: Auth | undefined;

  constructor( private http: HttpClient) { }

  verifyAuthentication(): Observable<boolean> {
    if(!localStorage.getItem('token')){
      return of(false);
    }

    return this.http.get<Auth>(` ${ this.baseUrl }/characters/1`)
      .pipe(
        map(auth => {
          this._auth = auth;
          console.log('map', auth);
          return true;
        })
      )
  
  }

  login(){
    return this.http.get<Auth>(` ${ this.baseUrl }/characters/1` )
      .pipe( 
      tap( auth => this._auth = auth ),
      tap( auth => localStorage.setItem('token', auth.id))
      );
  }

  get auth(): Auth{
    return {...this._auth!}
  }
}
