import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//change the locale of the app
import localeMxEs from '@angular/common/locales/es-MX' //idioma de todos los paises
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeMxEs); //se registra el idioma

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    SalesModule,
    BrowserAnimationsModule
  ],
  providers: [
    //{ provide: LOCALE_ID, useValue: 'es-MX' } guardar y aplicar de manera global el idioma
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
