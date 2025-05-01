import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ChartComponent
  ],
  exports: [ChartComponent]
})
export class SharedModule { }
