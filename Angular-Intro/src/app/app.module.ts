import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WebAppComponent } from './webapp/webapp.component';
import { ClientsComponent } from './clients/clients.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ControlComponent } from './control/control.component';
import { ServerEleComponent } from './server-ele/server-ele.component';

@NgModule({
  declarations: [
    AppComponent,
    WebAppComponent,
    ClientsComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
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
