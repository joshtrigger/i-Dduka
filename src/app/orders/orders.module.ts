import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    OrdersRoutingModule,
    CommonModule,
    FlexLayoutModule,
    StoreModule.forFeature('orders', {})
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class OrdersModule {}
