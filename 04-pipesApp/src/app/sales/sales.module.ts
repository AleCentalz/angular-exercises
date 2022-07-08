import { NgModule } from '@angular/core';
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
    CommonModule
  ],
  exports: [
    NumbersComponent,
    NonCommonsComponent,
    BasicComponent,
    OrderComponent
  ]
})
export class SalesModule { }
