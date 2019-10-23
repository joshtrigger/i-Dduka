import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SanitizerPipe } from './pipes/sanitizers/sanitizer.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/product.module';
import { OrdersModule } from './orders/orders.module';
import { httpInterceptorProviders } from './shared/interceptors';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
@NgModule({
  declarations: [
    AppComponent,
    SanitizerPipe,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRoot(),
    FontAwesomeModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'i-Dduuka',
      maxAge: 25
    }),
    UsersModule,
    ProductsModule,
    OrdersModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
