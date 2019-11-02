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
import { ProductFormComponent } from '../shared/components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ProductsRoutingModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    StoreModule.forFeature('products', {})
  ],
  exports: [],
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProfileComponent,
    LoaderComponent,
    ProductFormComponent
  ],
  providers: []
})
export class ProductsModule {}
