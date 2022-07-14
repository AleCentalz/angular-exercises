import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CommonModule, UpperCasePipe } from '@angular/common';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NonCommonsComponent } from './pages/non-commons/non-commons.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrderComponent } from './pages/order/order.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';




@NgModule({
  declarations: [
    //components
    NumbersComponent,
    NonCommonsComponent,
    BasicComponent,
    OrderComponent,
    //pipes
    UppercasePipe,
    FlyPipe,
    OrderPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersComponent,
    NonCommonsComponent,
    BasicComponent,
    OrderComponent
  ]
})
export class SalesModule { }
