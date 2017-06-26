import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { ServerEleComponent } from './server-ele/server-ele.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    ServerEleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
