import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { WidgetCardComponent } from '../widget-card/widget-card.component';
import { SharedModule } from '../../../shared/shared.module';
import { CommonService } from '../../../services/common.service';

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

tableColumns = [
  { field: 'gp', header: 'GP', filterType: 'dropdown', filterOptions: ['Patto Jawahar Singh', 'Beer Badhni', 'Ransih Kalan', 'Patto Hira Singh', 'Nangal', 'Lopon', 'Geziana', 'Saidoke', 'Takhtupura', 'Badhni Khurd'], visible: true },
  { field: 'gpCode', header: 'GP Code', sortable: true, visible: true },
  { field: 'schemeName', header: 'Scheme Name', visible: true },
  { field: 'schemeComponent', header: 'Scheme Component', visible: true },
  { field: 'focusArea', header: 'Focus Area', visible: true },
  { field: 'activityCode', header: 'Activity Code', visible: true },
  { field: 'activityName', header: 'Activity Name', visible: true },
  { field: 'locationOfAsset', header: 'Location of Asset', visible: true },
  { field: 'estimatedCost', header: 'Estimated Cost', sortable: true, visible: true },
  { field: 'technicalSanctionedAmount', header: 'Tech. Sanctioned Amount', visible: true },
  { field: 'administrativeSanctionedAmount', header: 'Admin. Sanctioned Amount', visible: true },
  { field: 'expenditure', header: 'Expenditure', visible: true },
  { field: 'activityStatus', header: 'Status', filterType: 'dropdown', filterOptions: ['Activity Approved'], visible: true }
];

  tableData=[
    {
      "gp": "Patto Jawahar Singh",
      "gpCode": "236289",
      "schemeName": "XV Finance Commission",
      "schemeComponent": "Tied Grant",
      "focusArea": "Drinking water",
      "activityCode": "106179455",
      "activityName": "Water Supply to villages",
      "locationOfAsset": "Patto Jawahar Singh (153)",
      "estimatedCost": 174530,
      "technicalSanctionedAmount": null,
      "administrativeSanctionedAmount": null,
      "expenditure": null,
      "activityStatus": "Activity Approved"
    },
    {
      "gp": "Beer Badhni",
      "gpCode": "17281",
      "schemeName": "XV Finance Commission",
      "schemeComponent": "Tied Grant",
      "focusArea": "Drinking water",
      "activityCode": "106183797",
      "activityName": "Water Supply to villages",
      "locationOfAsset": "Bir Badni (102)",
      "estimatedCost": 195260,
      "technicalSanctionedAmount": null,
      "administrativeSanctionedAmount": null,
      "expenditure": null,
      "activityStatus": "Activity Approved"
    },
    {
      "gp": "Ransih Kalan",
      "gpCode": "17307",
      "schemeName": "XV Finance Commission",
      "schemeComponent": "Tied Grant",
      "focusArea": "Drinking water",
      "activityCode": "106186378",
      "activityName": "Water Supply to villages",
      "locationOfAsset": "Ransih Kalan (156)",
      "estimatedCost": 489510,
      "technicalSanctionedAmount": null,
      "administrativeSanctionedAmount": null,
      "expenditure": null,
      "activityStatus": "Activity Approved"
    },
    {
      "gp": "Patto Hira Singh",
      "gpCode": "17304",
      "schemeName": "XV Finance Commission",
      "schemeComponent": "Tied Grant",
      "focusArea": "Drinking water",
      "activityCode": "106188579",
      "activityName": "Water Supply to villages",
      "locationOfAsset": "Patto Hira Singh (154)",
      "estimatedCost": 1192320,
      "technicalSanctionedAmount": null,
      "administrativeSanctionedAmount": null,
      "expenditure": null,
      "activityStatus": "Activity Approved"
    },
    {
      "gp": "Nangal",
      "gpCode": "17301",
      "schemeName": "XV Finance Commission",
      "schemeComponent": "Tied Grant",
      "focusArea": "Drinking water",
      "activityCode": "106204574",
      "activityName": "Water Supply to villages",
      "locationOfAsset": "Nangal (164)",
      "estimatedCost": 497985,
      "technicalSanctionedAmount": null,
      "administrativeSanctionedAmount": null,
      "expenditure": null,
      "activityStatus": "Activity Approved"
    },
    {
      "gp": "Lopon",
      "gpCode": "17296",
      "schemeName": "XV Finance Commission",
      "schemeComponent": "Tied Grant",
      "focusArea": "Drinking water",
      "activityCode": "106207918",
      "activityName": "Water Supply to villages",
      "locationOfAsset": "Lopon (99)",
      "estimatedCost": 1594390,
      "technicalSanctionedAmount": null,
      "administrativeSanctionedAmount": null,
      "expenditure": null,
      "activityStatus": "Activity Approved"
    },
    {
      "gp": "Geziana",
      "gpCode": "17289",
      "schemeName": "XV Finance Commission",
      "schemeComponent": "Tied Grant",
      "focusArea": "Drinking water",
      "activityCode": "106208670",
      "activityName": "Water Supply to villages",
      "locationOfAsset": "Ghaziana (147)",
      "estimatedCost": 320390,
      "technicalSanctionedAmount": null,
      "administrativeSanctionedAmount": null,
      "expenditure": null,
      "activityStatus": "Activity Approved"
    },
    {
      "gp": "Saidoke",
      "gpCode": "17311",
      "schemeName": "XV Finance Commission",
      "schemeComponent": "Tied Grant",
      "focusArea": "Drinking water",
      "activityCode": "106209504",
      "activityName": "Water Supply to villages",
      "locationOfAsset": "Saido -Ke (159)",
      "estimatedCost": 1401110,
      "technicalSanctionedAmount": null,
      "administrativeSanctionedAmount": null,
      "expenditure": null,
      "activityStatus": "Activity Approved"
    },
    {
      "gp": "Takhtupura",
      "gpCode": "17312",
      "schemeName": "XV Finance Commission",
      "schemeComponent": "Tied Grant",
      "focusArea": "Drinking water",
      "activityCode": "106336540",
      "activityName": "Water Supply to villages",
      "locationOfAsset": "Takhtu Pura (162)",
      "estimatedCost": 836770,
      "technicalSanctionedAmount": null,
      "administrativeSanctionedAmount": null,
      "expenditure": null,
      "activityStatus": "Activity Approved"
    },
    {
      "gp": "Badhni Khurd",
      "gpCode": "17277",
      "schemeName": "XV Finance Commission",
      "schemeComponent": "Tied Grant",
      "focusArea": "Drinking water",
      "activityCode": "106717727",
      "activityName": "Water Supply to villages",
      "locationOfAsset": "Badhni Khurd (100)",
      "estimatedCost": 314440,
      "technicalSanctionedAmount": null,
      "administrativeSanctionedAmount": null,
      "expenditure": null,
      "activityStatus": "Activity Approved"
    }
  ]
  
  constructor(
    private commonService: CommonService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.setGridBreakpoint(window.innerWidth);
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
