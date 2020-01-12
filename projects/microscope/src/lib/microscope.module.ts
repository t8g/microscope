import { NgModule } from '@angular/core';
import { MicroscopeComponent } from './microscope.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MicroscopeComponent],
  imports: [
    CommonModule
  ],
  exports: [MicroscopeComponent]
})
export class MicroscopeModule { }
