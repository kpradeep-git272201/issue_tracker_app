import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InrFormatPipe } from './inr-format.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InrFormatPipe
  ],
  exports:[InrFormatPipe]
})
export class SharedModule { }
