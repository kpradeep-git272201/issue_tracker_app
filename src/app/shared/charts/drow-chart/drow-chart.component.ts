import {
  Component,
  NgZone,
  Inject,
  PLATFORM_ID,
  Input,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { MaterialModule } from '../../../material/material.module';
import { CommonService } from '../../../services/planning/common.service';
import { SharedService } from '../../../services/filter/shared.service';

@Component({
  selector: 'app-drow-chart',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './drow-chart.component.html',
  styleUrls: ['./drow-chart.component.scss']
})
export class DrowChartComponent implements AfterViewInit, OnDestroy {
  @Input() chartData: any;
  chartType: string = 'donut';
  donutData:any=[];
  @ViewChild('chartdiv', { static: true }) chartDiv!: ElementRef;

  private filterSubscription!: Subscription;
  private root!: am5.Root;

  constructor(private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
    private commonService: CommonService,
    private sharedService : SharedService
  ) { }

  ngOnInit(): void {
    this.donutData = this.chartData.data;
    // this.filterSubscription = this.sharedService.currentDataFilter.subscribe((filter) => {
    //   if (filter?.stateCode !== null && filter?.financialYear) {
    //     this.commonService.setFilteredData(filter);
    //     this.donutData = this.commonService.getDonutData();
    //     this.updateChart();
    //   }
    // });
  }
  ngOnDestroy(): void {
    this.root?.dispose();
  }
  ngAfterViewInit() {
    this.createDonutChart();
  }
  

  updateChart(type?:any) {
    if (this.root) {
      this.root.dispose();
    }
    if(type=='bar'){
      this.createBarChart();
    }else if(type=='pie'){
      this.createPieChart();
    }else if(type=='tree'){

    }else{
      this.createDonutChart();
    }

  }
  
  switchChart(type: string) {
    this.chartType = type;
    this.updateChart(type); 
  }
createDonutChart() {
  if (isPlatformBrowser(this.platformId) && this.chartDiv?.nativeElement) {
    this.zone.runOutsideAngular(() => {
      this.root = am5.Root.new(this.chartDiv.nativeElement);
      (this.root as any)._logo?.set("forceHidden", true);
      this.root.setThemes([am5themes_Animated.new(this.root)]);

      // Main container with 2 children: chart and legend
      const container = this.root.container.children.push(
        am5.Container.new(this.root, {
          layout: this.root.horizontalLayout,
          width: am5.percent(100),
          height: am5.percent(100),
        })
      );

      // Pie chart container (50%)
      const chart = container.children.push(
        am5percent.PieChart.new(this.root, {
          innerRadius: am5.percent(60),
          width: am5.percent(50),
          layout: this.root.verticalLayout,
        })
      );

      // Series config
      const series = chart.series.push(
        am5percent.PieSeries.new(this.root, {
          valueField: 'value',
          categoryField: 'category',
        })
      );


      series.ticks.template.set("visible", false);

      series.labels.template.setAll({
        text: "{value.percent.formatNumber('0.0')}%", // Display percentage
        visible: true,
        fontSize: 12,
        fill: am5.color(0xffffff),
        centerX: am5.percent(50),
        centerY: am5.percent(50)
      });

      // Slice styles with rounded corners
      series.slices.template.setAll({
        stroke: am5.color(0xffffff),
        strokeWidth: 1,
        strokeOpacity: 1,
        cornerRadius: 4
      });

      // Set data
      series.data.setAll(this.donutData);

      // Legend container (50%)
      const legend = container.children.push(
        am5.Legend.new(this.root, {
          nameField: "category",
          fillField: "fill",
          strokeField: "stroke",
          width: am5.percent(50),
          height: am5.percent(100),
          layout: this.root.verticalLayout,
          maxHeight: 300,
          marginTop: 50,
          verticalScrollbar: am5.Scrollbar.new(this.root, {
            orientation: "vertical"
          })
        })
      );

      // Legend label truncation and tooltip
      legend.labels.template.setAll({
        oversizedBehavior: "truncate",
        maxWidth: 160,
        tooltipText: "{category}"
      });

      // Disable legend click toggling
      legend.data.setAll(series.dataItems);
      legend.itemContainers.each((itemContainer: any) => {
        itemContainer.set("clickable", false);
        itemContainer.events.disableType("click");
      });

      // Animate chart
      series.appear(1000, 100);
    });
  }
}

  
  createPieChart() {
    if (isPlatformBrowser(this.platformId) && this.chartDiv?.nativeElement) {
      this.zone.runOutsideAngular(() => {
        this.root = am5.Root.new(this.chartDiv.nativeElement);
        (this.root as any)._logo?.set("forceHidden", true);
        this.root.setThemes([am5themes_Animated.new(this.root)]);
  
        // Main container with 2 children: chart and legend
        const container = this.root.container.children.push(
          am5.Container.new(this.root, {
            layout: this.root.horizontalLayout,
            width: am5.percent(100),
            height: am5.percent(100),
          })
        );
  
        // Pie chart container (50%)
        const chart = container.children.push(
          am5percent.PieChart.new(this.root, {
            innerRadius: 0,
            width: am5.percent(50),
            layout: this.root.verticalLayout,
          })
        );
  
        // Series config
        const series = chart.series.push(
          am5percent.PieSeries.new(this.root, {
            valueField: "value",
            categoryField: "category",
          })
        );
  

        series.labels.template.set("visible", false);
        series.ticks.template.set("visible", false);
  
        // Calculate total value for percentage calculation
        const total = this.donutData.reduce((acc: any, item: { value: any; }) => acc + item.value, 0);
  
        // Apply some basic slice styles
        series.slices.template.setAll({
          stroke: am5.color(0xffffff),
          strokeWidth: 1,
          strokeOpacity: 1,
          cornerRadius: 4
        });
  
        // Set data
        series.data.setAll(this.donutData);

        // Legend container (50%)
        const legend = container.children.push(
          am5.Legend.new(this.root, {
               centerY: am5.percent(50),
              y: am5.percent(50),
            nameField: "category",
            fillField: "fill",
            strokeField: "stroke",
            width: am5.percent(50),
            height: am5.percent(100),
            layout: this.root.verticalLayout,
            maxHeight: 300,
            marginTop: 50,
            verticalScrollbar: am5.Scrollbar.new(this.root, {
              orientation: "vertical",
            }),
          })
        );
  
        // Ellipsis on legend labels and tooltip on hover
        legend.labels.template.setAll({
          oversizedBehavior: "truncate",
          maxWidth: 160,
          tooltipText: "{category}",
        });
  
        // Add data to legend
        legend.data.setAll(series.dataItems);
  
        // Animate chart
        series.appear(1000, 100);
      });
    }
  }
  
  createBarChart() {
    if (isPlatformBrowser(this.platformId) && this.chartDiv?.nativeElement) {
      this.zone.runOutsideAngular(() => {
        this.root = am5.Root.new(this.chartDiv.nativeElement);
        (this.root as any)._logo?.set("forceHidden", true);
        this.root.setThemes([am5themes_Animated.new(this.root)]);
  
        // Create main container
        const container = this.root.container.children.push(
          am5.Container.new(this.root, {
            layout: this.root.horizontalLayout,
            width: am5.percent(100),
            height: am5.percent(100),
          })
        );
  
        // Chart container (50%)
        const chart = container.children.push(
          am5xy.XYChart.new(this.root, {
            panX: false,
            panY: false,
            wheelX: "none",
            wheelY: "none",
            layout: this.root.verticalLayout,
            width: am5.percent(50)
          })
        );
  
        // Category Axis (Y)
        const yAxis = chart.yAxes.push(
          am5xy.CategoryAxis.new(this.root, {
            categoryField: "category",
            renderer: am5xy.AxisRendererY.new(this.root, {
              minGridDistance: 10,
              inversed: true,
              cellStartLocation: 0.1,
              cellEndLocation: 0.9
            }),
          })
        );
  
        // Value Axis (X)
        const xAxis = chart.xAxes.push(
          am5xy.ValueAxis.new(this.root, {
            renderer: am5xy.AxisRendererX.new(this.root, {})
          })
        );
  
        // Series
        const series = chart.series.push(
          am5xy.ColumnSeries.new(this.root, {
            name: "Value",
            xAxis: xAxis,
            yAxis: yAxis,
            valueXField: "value",
            categoryYField: "category",
            tooltip: am5.Tooltip.new(this.root, {
              labelText: "{category}: {value}"
            })
          })
        );
  
        series.columns.template.setAll({
          height: am5.percent(90),
          strokeOpacity: 0
        });
  
        // Set data
        yAxis.data.setAll(this.donutData);
        series.data.setAll(this.donutData);
  
        // Legend (50%)
        const legend = container.children.push(
          am5.Legend.new(this.root, {
            nameField: "category",
            fillField: "fill",
            strokeField: "stroke",
            width: am5.percent(50),
            height: am5.percent(100),
            layout: this.root.verticalLayout,
            maxHeight: 300,
            marginTop: 30,
            verticalScrollbar: am5.Scrollbar.new(this.root, {
              orientation: "vertical"
            })
          })
        );
  
        legend.labels.template.setAll({
          oversizedBehavior: "truncate",
          maxWidth: 160,
          tooltipText: "{category}"
        });
  
        legend.data.setAll(series.dataItems);
  
        chart.appear(1000, 100);
      });
    }
  }
  

  createTreeChart(){
    
  }

}
