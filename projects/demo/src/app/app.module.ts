import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MicroscopeModule } from 'microscope';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MicroscopeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
