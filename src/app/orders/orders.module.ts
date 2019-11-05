import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { OrdersReducer } from '../reducers/orders.reducer';

@NgModule({
  imports: [
    OrdersRoutingModule,
    CommonModule,
    FlexLayoutModule,
    StoreModule.forFeature('orders', OrdersReducer)
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class OrdersModule {}
