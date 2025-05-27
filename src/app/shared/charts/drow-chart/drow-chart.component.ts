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
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-drow-chart',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './drow-chart.component.html',
  styleUrls: ['./drow-chart.component.scss'],
})
export class DrowChartComponent implements AfterViewInit, OnDestroy {
  @Input() chartData: any;
  chartType: string = 'donut';
  dataChart: any = [];
  @ViewChild('chartdiv', { static: true }) chartDiv!: ElementRef;

  private root!: am5.Root;

  constructor(
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit(): void {
    this.dataChart = this.chartData.data;
  }
  ngOnDestroy(): void {
    this.root?.dispose();
  }
  ngAfterViewInit() {
    this.createDonutChart();
  }

  updateChart(type?: any) {
    if (this.root) {
      this.root.dispose();
    }
    if (type == 'bar') {
      this.createBarChart();
    } else if (type == 'pie') {
      this.createPieChart();
    } else if (type == 'tree') {
    } else {
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
        (this.root as any)._logo?.set('forceHidden', true);
        this.root.setThemes([am5themes_Animated.new(this.root)]);

        // Main container with 2 children: chart and legend
        const container = this.root.container.children.push(
          am5.Container.new(this.root, {
            layout: this.root.horizontalLayout,
            width: am5.percent(100),
            height: am5.percent(100),
          }),
        );

        // Pie chart container (50%)
        const chart = container.children.push(
          am5percent.PieChart.new(this.root, {
            innerRadius: am5.percent(60),
            width: am5.percent(50),
            layout: this.root.verticalLayout,
          }),
        );

        // Series config
        const series = chart.series.push(
          am5percent.PieSeries.new(this.root, {
            valueField: 'value',
            categoryField: 'category',
          }),
        );

        series.ticks.template.set('visible', false);

        series.labels.template.setAll({
          text: "{value.percent.formatNumber('0.0')}%", // Display percentage
          visible: true,
          fontSize: 14,
          fontFamily: "Open Sans",
          fill: am5.color(0xffffff),
          centerX: am5.percent(50),
          centerY: am5.percent(50),
        });

        // Slice styles with rounded corners
        series.slices.template.setAll({
          // tooltipY: -10,
          stroke: am5.color(0xffffff),
          strokeWidth: 1,
          strokeOpacity: 1,
          cornerRadius: 4,
        });

        // Set data
        series.data.setAll(this.dataChart);

        series.bullets.push((root, series, dataItem: any) => {
          const value = dataItem.dataContext.value;

          if (value < 5) {
            return undefined; // Skip small values
          }

          return am5.Bullet.new(root, {
            sprite: am5.Label.new(root, {
              text: '{value}%',
              centerX: am5.percent(50),
              centerY: am5.percent(50),
              populateText: true,
              fontSize: 14,
              // fontWeight: 'bold',
              fontFamily: "Open Sans",
              fill: am5.color(0xffffff),
            }),
            locationX: 0.5,
            locationY: 0.5,
          });
        });
        // Legend container (50%)
        const legend = container.children.push(
          am5.Legend.new(this.root, {
            nameField: 'category',
            fillField: 'fill',
            strokeField: 'stroke',
            width: am5.percent(50),
            height: am5.percent(100),
            layout: this.root.verticalLayout,
            maxHeight: 300,
            marginTop: 50,
            verticalScrollbar: am5.Scrollbar.new(this.root, {
              orientation: 'vertical',
            }),
          }),
        );

        // Legend label truncation and tooltip
        legend.labels.template.setAll({
          oversizedBehavior: 'truncate',
          maxWidth: 160,
          tooltipText: '{category}',
        });
  
        // Sort data items in ascending order based on value
        const sortedDataItems = series.dataItems.slice().sort((a, b) => {
          const aValue = a.get('value') ?? 0;
          const bValue = b.get('value') ?? 0;
          return bValue - aValue;
        });
  
        // Set sorted data items to legend
        legend.data.setAll(sortedDataItems);
  
        // Disable legend click toggling
        legend.itemContainers.each((itemContainer: any) => {
          const dataItem = itemContainer.dataItem;
  
          // Make legend clickable
          itemContainer.set('clickable', true);
  
          // Disable default toggle behavior
          itemContainer.events.disableType('click'); // Prevent slice toggling
  
          // Handle click manually
          itemContainer.events.on('click', () => {
            const category = dataItem?.dataContext?.category;
            const value = dataItem?.dataContext?.value;
            console.log('Legend item clicked:', { category, value });
          });
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
        (this.root as any)._logo?.set('forceHidden', true);
        this.root.setThemes([am5themes_Animated.new(this.root)]);
        const container = this.root.container.children.push(
          am5.Container.new(this.root, {
            layout: this.root.horizontalLayout,
            width: am5.percent(100),
            height: am5.percent(100),
          })
        );
  
        const chart = container.children.push(
          am5percent.PieChart.new(this.root, {
            innerRadius: 0,
            width: am5.percent(50),
            layout: this.root.verticalLayout,
          })
        );
  
        const series = chart.series.push(
          am5percent.PieSeries.new(this.root, {
            valueField: 'value',
            categoryField: 'category',
          })
        );
  
        series.labels.template.set('visible', false);
        series.ticks.template.set('visible', false);
  
        series.slices.template.setAll({
          stroke: am5.color(0xffffff),
          strokeWidth: 1,
          strokeOpacity: 1,
          cornerRadius: 4,
        });
  
        series.data.setAll(this.dataChart);
  
        series.bullets.push((root, series, dataItem: any) => {
          const value = dataItem.dataContext.value;
  
          if (value < 5) {
            return undefined;
          }
  
          return am5.Bullet.new(root, {
            sprite: am5.Label.new(root, {
              text: '{value}%',
              centerX: am5.percent(50),
              centerY: am5.percent(50),
              populateText: true,
              fontSize: 14,
              // fontWeight: 'bold',
              fontFamily: "Open Sans",
              fill: am5.color(0xffffff),
            }),
            locationX: 0.5,
            locationY: 0.5,
          });
        });
  
        const legend = container.children.push(
          am5.Legend.new(this.root, {
            centerY: am5.percent(50),
            y: am5.percent(50),
            nameField: 'category',
            fillField: 'fill',
            strokeField: 'stroke',
            width: am5.percent(50),
            height: am5.percent(100),
            layout: this.root.verticalLayout,
            maxHeight: 300,
            marginTop: 50,
            verticalScrollbar: am5.Scrollbar.new(this.root, {
              orientation: 'vertical',
            }),
          })
        );
  
        legend.labels.template.setAll({
          oversizedBehavior: 'truncate',
          maxWidth: 160,
          tooltipText: '{category}',
        });
  
        // Sort dataItems in descending order based on value
        const sortedDataItems = series.dataItems.slice().sort((a, b) => {
          const aValue = a.get('value') ?? 0;
          const bValue = b.get('value') ?? 0;
          return bValue - aValue;
        });
  
        legend.data.setAll(sortedDataItems);
  
        series.appear(1000, 100);
      });
    }
  }
  

  createBarChart() {
    if (isPlatformBrowser(this.platformId) && this.chartDiv?.nativeElement) {
      this.zone.runOutsideAngular(() => {
        this.root = am5.Root.new(this.chartDiv.nativeElement);
        (this.root as any)._logo?.set('forceHidden', true);
        this.root.setThemes([am5themes_Animated.new(this.root)]);
  
        // Create main container
        const container = this.root.container.children.push(
          am5.Container.new(this.root, {
            layout: this.root.horizontalLayout,
            width: am5.percent(100),
            height: am5.percent(100),
          }),
        );
  
        // Chart container (100%)
        const chart = container.children.push(
          am5xy.XYChart.new(this.root, {
            panX: true,
            panY: false,
            wheelX: 'panX',
            wheelY: 'none',
            layout: this.root.verticalLayout,
            width: am5.percent(500),
          }),
        );
        
        chart.set('scrollbarX', am5.Scrollbar.new(this.root, {
          orientation: 'horizontal',
          height: 10,
        }));
        

        // Category Axis (X)
        const xAxis = chart.xAxes.push(
          am5xy.CategoryAxis.new(this.root, {
            categoryField: 'category',
            renderer: am5xy.AxisRendererX.new(this.root, {
              minGridDistance: 20,
              cellStartLocation: 0.1,
              cellEndLocation: 0.9,
            }),
          }),
        );
        xAxis.get('renderer').labels.template.setAll({
          rotation: -45,         
          centerY: am5.p50,
          centerX: am5.p100,
          paddingRight: 15,
          oversizedBehavior: "wrap",
          maxWidth: 100,
        });
        
        // Value Axis (Y)
        const yAxis = chart.yAxes.push(
          am5xy.ValueAxis.new(this.root, {
            renderer: am5xy.AxisRendererY.new(this.root, {}),
          }),
        );
  
        // Series
        const series = chart.series.push(
          am5xy.ColumnSeries.new(this.root, {
            name: 'Value',
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: 'value',
            categoryXField: 'category',
            tooltip: am5.Tooltip.new(this.root, {
              labelText: '{category}: {value}',
            }),
          }),
        );
  
        series.columns.template.setAll({
          width: am5.percent(90),
          strokeOpacity: 0,
        });
  
        // Set data
        xAxis.setAll({
          start: 0,
          end: 1,
        });
        
        xAxis.data.setAll(this.dataChart,); 
        series.data.setAll(this.dataChart);
  
        // Legend (50%)
        const legend = container.children.push(
          am5.Legend.new(this.root, {
            nameField: 'category',
            fillField: 'fill',
            strokeField: 'stroke',
            width: am5.percent(50),
            height: am5.percent(100),
            layout: this.root.verticalLayout,
            maxHeight: 300,
            marginTop: 30,
            verticalScrollbar: am5.Scrollbar.new(this.root, {
              orientation: 'vertical',
            }),
          }),
        );
  
        legend.labels.template.setAll({
          oversizedBehavior: 'truncate',
          maxWidth: 160,
          tooltipText: '{category}',
        });
  
        // Optional: wait until chart is ready before setting legend data
        this.root.events.once('frameended', () => {
          legend.data.setAll(series.dataItems);
        });
  
        // Appear animation
        chart.appear(1000, 100);
      });
    }
  }
  createTreeChart() {}
}

// dsf