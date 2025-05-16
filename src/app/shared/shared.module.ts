import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectAnalyticsComponent } from './table/project-analytics/project-analytics.component';
import { GenericTableComponent } from './table/generic-table/generic-table.component';
import { GenericChartComponent } from './charts/generic-chart/generic-chart.component';
import { DrowChartComponent } from './charts/drow-chart/drow-chart.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProjectAnalyticsComponent,
    GenericTableComponent,
    GenericChartComponent,
    DrowChartComponent
  ],
  exports: [
    ProjectAnalyticsComponent,
    GenericTableComponent,
    GenericChartComponent,
    DrowChartComponent
  ]
})
export class SharedModule { }
