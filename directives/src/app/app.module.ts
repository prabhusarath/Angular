import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirsComponent } from './dirs/dirs.component';
import { CustomdirDirective } from './Customdir/customdir.directive';
import { DircustomDirective } from './dircustom/dircustom.directive'

@NgModule({
  declarations: [
    AppComponent,
    DirsComponent,
    CustomdirDirective,
    DircustomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
