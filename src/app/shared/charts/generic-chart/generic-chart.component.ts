/* 
import {
  Component,
  NgZone,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { MaterialModule } from '../../../material/material.module';
import { CommonService } from '../../../services/planning/common.service';
import { SharedService } from '../../../services/filter/shared.service';
import { DrowChartComponent } from '../drow-chart/drow-chart.component';
@Component({
  selector: 'app-generic-chart',
  imports: [MaterialModule, DrowChartComponent],
  templateUrl: './generic-chart.component.html',
  styleUrl: './generic-chart.component.scss'
})
export class GenericChartComponent {
  breakpoint: number = 2;
  isBrowser: boolean = false;

  donutData: any = [];
  @ViewChild('chartdiv', { static: true }) chartDiv!: ElementRef;

  private filterSubscription!: Subscription;
  private root!: am5.Root;
  chartData: any=[];

  constructor(private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
    private commonService: CommonService,
    private sharedService: SharedService
  ) { }
  ngOnInit(): void {
    this.chartData = this.commonService.getChartData();
    // this.donutData = this.commonService.getDonutData();
    // this.filterSubscription = this.sharedService.currentDataFilter.subscribe((filter) => {
    //   if (filter?.stateCode !== null && filter?.financialYear) {
    //     this.commonService.setFilteredData(filter);
    //     this.donutData = this.commonService.getDonutData();
    //     // this.updateChart();
    //   }
    // });
    this.getGeographicalFilter();

  }
   getGeographicalFilter(){
    this.sharedService.currentDataFilter.subscribe((data) => {
      this.getChartFilter(data);
    });
  }
  getChartFilter(filterData: any) {
    const chartData = this.commonService.getChartData();
  
    if (filterData) {
      const filteredData = chartData.filter((item: any) => {
        const matchesYear = filterData.financialYear ? item.financialYear == filterData.financialYear : true;
        const matchesState = filterData.stateCode ? item.stateCode == filterData.stateCode : true;
        const matchesDistrict = filterData.districtCode ? item.districtCode == filterData.districtCode : true;
  
        return matchesYear && matchesState && matchesDistrict;
      });
  
      setTimeout(() => {
        this.chartData = [...filteredData];
        this.chartData=(this.chartData.length>0)?this.chartData: [{data:[]}];
      }, 0);
    }
  }
  onResize(event: any) {
    if (this.isBrowser) {
      this.setGridBreakpoint(event.target.innerWidth);
    }
  }
  private setGridBreakpoint(width: number) {
    this.breakpoint = width <= 768 ? 1 : 2;
  }

}
 */


import {
  Component,
  NgZone,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
  OnInit,
} from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { MaterialModule } from '../../../material/material.module';
import { CommonService } from '../../../services/planning/common.service';
import { SharedService } from '../../../services/filter/shared.service';
import { DrowChartComponent } from '../drow-chart/drow-chart.component';

@Component({
  selector: 'app-generic-chart',
  standalone: true,
  imports: [MaterialModule, DrowChartComponent],
  templateUrl: './generic-chart.component.html',
  styleUrl: './generic-chart.component.scss'
})
export class GenericChartComponent implements OnInit {
  breakpoint: number = 1;
  isBrowser: boolean = false;

  donutData: any = [];
  chartData: any = [];

  @ViewChild('chartdiv', { static: true }) chartDiv!: ElementRef;

  private filterSubscription!: Subscription;
  private root!: am5.Root;

  constructor(
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
    private commonService: CommonService,
    private sharedService: SharedService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if(this.isBrowser){
    this.chartData = this.commonService.getChartData();
    this.setGridBreakpoint(window.innerWidth);
    this.getGeographicalFilter();
    }

  }

  getGeographicalFilter() {
    this.sharedService.currentDataFilter.subscribe((data) => {
      this.getChartFilter(data);
    });
  }

  getChartFilter(filterData: any) {
    const chartData = this.commonService.getChartData();

    if (filterData) {
      const filteredData = chartData.filter((item: any) => {
        const matchesYear = filterData.financialYear ? item.financialYear == filterData.financialYear : true;
        const matchesState = filterData.stateCode ? item.stateCode == filterData.stateCode : true;
        const matchesDistrict = filterData.districtCode ? item.districtCode == filterData.districtCode : true;

        return matchesYear && matchesState && matchesDistrict;
      });

      setTimeout(() => {
        this.chartData = [...filteredData];
        this.chartData = (this.chartData.length > 0) ? this.chartData : [{ data: [] }];
      }, 0);
    }
  }

  onResize(event: any) {
    if (this.isBrowser) {
      this.setGridBreakpoint(event.target.innerWidth);
    }
  }

  private setGridBreakpoint(width: number) {
    this.breakpoint = width > 1200 ? 2 : 1;
  }
}
 