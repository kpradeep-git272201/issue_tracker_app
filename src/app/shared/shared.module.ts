import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { DataTableComponent } from './table/data-table/data-table.component';
import { ProjectAnalyticsComponent } from './table/project-analytics/project-analytics.component';
import { GenericTableComponent } from './table/generic-table/generic-table.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ChartComponent,
    PieChartComponent,
    BarChartComponent,
    DonutChartComponent,
    DataTableComponent,
    ProjectAnalyticsComponent,
    GenericTableComponent
  ],
  exports: [
    ChartComponent,
    PieChartComponent,
    BarChartComponent,
    DonutChartComponent,
    DataTableComponent,
    ProjectAnalyticsComponent,
    GenericTableComponent
  ]
})
export class SharedModule { }
