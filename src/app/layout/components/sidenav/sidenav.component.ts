import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonService } from '../../../services/planning/common.service';
import { RouterOutlet } from '@angular/router';

import { SharedService } from '../../../services/filter/shared.service';

import { DashboardFilterComponent } from '../sidefilters/dashboard-filter/dashboard-filter.component';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-sidenav',
  imports: [
    MaterialModule,
    RouterOutlet,
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
