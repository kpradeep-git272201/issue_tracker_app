import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ChartComponent,
    PieChartComponent,
    BarChartComponent,
    DonutChartComponent
  ],
  exports: [
    ChartComponent,
    PieChartComponent,
    BarChartComponent,
    DonutChartComponent
  ]
})
export class SharedModule { }
