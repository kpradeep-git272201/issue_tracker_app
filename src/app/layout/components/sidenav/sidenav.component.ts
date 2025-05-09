import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonService } from '../../../services/common.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectStatusComponent } from '../project-status/project-status.component';
import { GeographicalFilterComponent } from '../geographical-filter/geographical-filter.component';
import { TimePeriodComponent } from '../time-period/time-period.component';
import { DevelopementCategoryComponent } from '../developement-category/developement-category.component';

@Component({
  selector: 'app-sidenav',
  imports: [MaterialModule, RouterOutlet, HeaderComponent, ProjectStatusComponent, GeographicalFilterComponent, TimePeriodComponent, DevelopementCategoryComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  appList:any=[];
  opened = true;
  activeRoute: string | undefined;
  panelOpenState = false;


 




  timePeriod = 2023;
  comparisonTool = false;


  constructor(private commonService: CommonService){

  }

  ngOnInit(){
    this.appList = this.commonService.getAppList();
  }

  getOpenedStat(event: any) {
    this.opened = event;
  }
  getOpenSidenav(){
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
  receiveData(event:any){
    console.log(JSON.stringify(event));
  }
}
