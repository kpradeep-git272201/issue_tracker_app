import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonService } from '../../../services/planning/common.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { TimePeriodComponent } from '../time-period/time-period.component';

import { SharedService } from '../../../services/filter/shared.service';
import { ProjectStatusComponent } from '../sidefilters/project-status/project-status.component';

import { DevelopementCategoryComponent } from '../sidefilters/developement-category/developement-category.component';
import { DashboardFilterComponent } from '../sidefilters/dashboard-filter/dashboard-filter.component';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-sidenav',
  imports: [
    MaterialModule,
    RouterOutlet,
    HeaderComponent,
    ProjectStatusComponent,
    TimePeriodComponent,
    DevelopementCategoryComponent,
    DashboardFilterComponent
],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  appList: any = [];
  opened = true;
  activeRoute: string | undefined;
  panelOpenState = false;
  timePeriod = 2023;
  comparisonTool = false;

  constructor(
    private commonService: CommonService,
    private sharedService: SharedService,
  ) {}

  ngOnInit() {
    this.appList = this.commonService.getAppList();
  }

  getOpenedStat(event: any) {
    this.opened = event;
  }
  getOpenSidenav() {
    this.opened = !this.opened;
  }

  /** *************************************** */
  exportData() {
    // console.log('Exporting with filters:', {
    //   selectedState: this.selectedState,
    //   selectedDistrict: this.selectedDistrict,
    //   selectedPanchayat: this.selectedPanchayat,
    //   categories: this.categories,
    //   status: this.status,
    //   timePeriod: this.timePeriod,
    //   comparisonTool: this.comparisonTool
    // });
  }

  exportExcel() {
    const fileName = "ExcelSheet.xlsx";
    let data = document.getElementById("table-data");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, fileName);
  }

  
}
