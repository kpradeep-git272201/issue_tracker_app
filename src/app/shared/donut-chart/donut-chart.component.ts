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
  selector: 'app-donut-chart',
  imports: [MaterialModule],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss'
})
export class DonutChartComponent {
  donutData:any=[];
  @ViewChild('chartdiv', { static: true }) chartDiv!: ElementRef;


  private root!: am5.Root;

  constructor(private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.donutData = this.commonService.getDonutData();
  }
  ngOnDestroy(): void {
    this.root?.dispose();
  }
  ngAfterViewInit() {
    this.createDonutChart();
  }
  createDonutChart() {
    if (isPlatformBrowser(this.platformId) && this.chartDiv?.nativeElement) {
      this.zone.runOutsideAngular(() => {
        this.root = am5.Root.new(this.chartDiv.nativeElement);
        this.root.setThemes([am5themes_Animated.new(this.root)]);
  
        const chart = this.root.container.children.push(
          am5percent.PieChart.new(this.root, {
            layout: this.root.horizontalLayout,
            innerRadius: am5.percent(70),
          })
        );
  
        const series = chart.series.push(
          am5percent.PieSeries.new(this.root, {
            valueField: 'value',
            categoryField: 'category',
          })
        );
  
        series.labels.template.setAll({
          visible: false
        });
  
        series.ticks.template.set("visible", false);
  
        series.slices.template.setAll({
          tooltipText: "{category}: {value}",
          stroke: am5.color(0xffffff), 
          strokeWidth: 1, 
          strokeOpacity: 1
        });
  
        series.data.setAll(this.donutData);
        const legend = chart.children.push(
          am5.Legend.new(this.root, {
            centerY: am5.percent(50),
            y: am5.percent(50),
            layout: this.root.verticalLayout
          })
        );
  
        legend.data.setAll(series.dataItems);
  
        series.appear(1000, 100);
      });
    }
  }
  
  
}
