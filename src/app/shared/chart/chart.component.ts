import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  NgZone,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-chart',
  imports: [MaterialModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit, OnDestroy {
  @ViewChild('chartdiv', { static: true }) chartDiv!: ElementRef;
  @Input() chartType: 'donut' | 'pie' | 'bar' = 'pie';
  @Input() chartData: any[] = [];

  private root!: am5.Root;

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.root = am5.Root.new(this.chartDiv.nativeElement);
      this.root.setThemes([am5themes_Animated.new(this.root)]);

      if (this.chartType === 'pie' || this.chartType === 'donut') {
        const chart = this.root.container.children.push(
          am5percent.PieChart.new(this.root, {
            layout: this.root.verticalLayout,
            innerRadius: this.chartType === 'donut' ? am5.percent(50) : 0,
          })
        );

        const series = chart.series.push(
          am5percent.PieSeries.new(this.root, {
            valueField: 'value',
            categoryField: 'category',
          })
        );

        series.data.setAll(this.chartData);
        series.appear(1000, 100);
      }

      if (this.chartType === 'bar') {
        const chart = this.root.container.children.push(
          am5xy.XYChart.new(this.root, {
            panX: false,
            panY: false,
            layout: this.root.verticalLayout,
          })
        );

        const xAxis = chart.xAxes.push(
          am5xy.CategoryAxis.new(this.root, {
            categoryField: 'category',
            renderer: am5xy.AxisRendererX.new(this.root, {}),
          })
        );

        const yAxis = chart.yAxes.push(
          am5xy.ValueAxis.new(this.root, {
            renderer: am5xy.AxisRendererY.new(this.root, {}),
          })
        );

        xAxis.data.setAll(this.chartData);

        const series = chart.series.push(
          am5xy.ColumnSeries.new(this.root, {
            name: 'Series',
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: 'value',
            categoryXField: 'category',
          })
        );

        series.data.setAll(this.chartData);
        series.appear(1000, 100);
      }
    });
  }

  ngOnDestroy(): void {
    this.root?.dispose();
  }
}