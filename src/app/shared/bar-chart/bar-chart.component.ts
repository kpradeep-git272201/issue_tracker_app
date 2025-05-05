import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  NgZone,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { MaterialModule } from '../../material/material.module';
import { isPlatformBrowser } from '@angular/common';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-bar-chart',
  imports: [MaterialModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  @ViewChild('chartdiv', { static: true }) chartDiv!: ElementRef;

  barData:any=[]
  private root!: am5.Root;

  constructor(private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
        private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.barData = this.commonService.getBarData();
  }

  ngAfterViewInit() {
    this.createBarChart();
  }
  ngOnDestroy(): void {
    this.root?.dispose();
  }
  createBarChart() {
    if (isPlatformBrowser(this.platformId) && this.chartDiv?.nativeElement) {
      this.zone.runOutsideAngular(() => {
        this.root = am5.Root.new(this.chartDiv.nativeElement);
        this.root.setThemes([am5themes_Animated.new(this.root)]);
  
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
            renderer: am5xy.AxisRendererX.new(this.root, {
              minGridDistance: 30,
            }),
          })
        );
  
        const yAxis = chart.yAxes.push(
          am5xy.ValueAxis.new(this.root, {
            renderer: am5xy.AxisRendererY.new(this.root, {}),
          })
        );
  
        xAxis.data.setAll(this.barData);
  
        const series = chart.series.push(
          am5xy.ColumnSeries.new(this.root, {
            name: 'Series', // Required for legend display
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: 'value',
            categoryXField: 'category',
          })
        );
  
        // Add tooltip to each column
        series.columns.template.setAll({
          width: am5.percent(20),
          cornerRadiusTL: 4,
          cornerRadiusTR: 4,
          tooltipText: "{categoryX}: {valueY}",
          tooltipY: 0
        });
  
        // Add value labels on top of bars
        series.bullets.push(() => {
          return am5.Bullet.new(this.root, {
            locationY: 1,
            sprite: am5.Label.new(this.root, {
              text: "{valueY}",
              centerX: am5.percent(50),
              centerY: am5.percent(0),
              dy: -10,
              populateText: true,
            })
          });
        });
  
        series.data.setAll(this.barData);
  
        // ✅ Add legend below chart
        const legend = chart.children.push(
          am5.Legend.new(this.root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            marginTop: 20,
          })
        );
  
        legend.data.setAll(chart.series.values);
  
        series.appear(1000, 100);
      });
    }
  }
  
  
  
  
}
