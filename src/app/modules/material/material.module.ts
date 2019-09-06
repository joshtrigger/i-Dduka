import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, MatSnackBarModule],
  exports: [BrowserAnimationsModule, MatSnackBarModule]
})
export class MaterialModule {}
