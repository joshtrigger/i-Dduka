import { NgModule } from '@angular/core';

import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../users/profile/profile.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from '../reducers/products.reducer';

@NgModule({
  imports: [
    ProductsRoutingModule,
    CommonModule,
    FlexLayoutModule,
    StoreModule.forFeature('products', {})
  ],
  exports: [],
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProfileComponent,
    LoaderComponent
  ],
  providers: []
})
export class ProductsModule {}
