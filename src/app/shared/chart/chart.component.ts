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

  constructor(private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

  }
  ngOnDestroy(): void {
    this.root?.dispose();
  }

  
 
  
}