import { ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { WidgetCardComponent } from '../widget-card/widget-card.component';
import { SharedModule } from '../../../shared/shared.module';
import { CommonService } from '../../../services/planning/common.service';
import { SharedService } from '../../../services/filter/shared.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, WidgetCardComponent, SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  breakpoint: number = 3;
  isBrowser: boolean = false;
  tableColumns: any;
  tableData: any
 
  constructor(
    private commonService: CommonService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private sharedService: SharedService,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      console.warn(window)
      this.setGridBreakpoint(window?.innerWidth);
    }
    this.getReportData();
    this.getGeographicalFilter();
  }
  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
  onResize(event: any) {
    if (this.isBrowser) {
      this.setGridBreakpoint(event.target.innerWidth);
    }
  }

  private setGridBreakpoint(width: number) {
    this.breakpoint = width <= 768 ? 1 : 2;
  }


  getGeographicalFilter(){
    this.sharedService.currentDataFilter.subscribe((data) => {
      this.getReportDataFilter(data);
    });
  }

  getReportData(){
    const reportData = this.commonService.getReportData();
    this.tableColumns=reportData.tableColumns;
    this.tableData = reportData.tableData;
  }

  getReportDataFilter(filterData: any) {
    const reportData = this.commonService.getReportData();
  
    if (filterData) {
      const filteredData = reportData.tableData.filter((item: any) => {
        const matchesYear = filterData.financialYear ? item.financialYear == filterData.financialYear : true;
        const matchesState = filterData.stateCode ? item.stateCode == filterData.stateCode : true;
        const matchesDistrict = filterData.districtCode ? item.districtCode == filterData.districtCode : true;
  
        return matchesYear && matchesState && matchesDistrict;
      });
  
      setTimeout(() => {
        this.tableData = [...filteredData];
      }, 0);
    }
  }
  
}
