import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [OrdersRoutingModule, CommonModule, FlexLayoutModule],
  exports: [],
  declarations: [],
  providers: []
})
export class OrdersModule {}
