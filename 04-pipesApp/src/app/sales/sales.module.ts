import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NonCommonsComponent } from './pages/non-commons/non-commons.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrderComponent } from './pages/order/order.component';




@NgModule({
  declarations: [
    NumbersComponent,
    NonCommonsComponent,
    BasicComponent,
    OrderComponent
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
