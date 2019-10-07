import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [],
  declarations: [HomePageComponent],
  providers: []
})
export class UsersModule {}
