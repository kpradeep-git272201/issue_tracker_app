import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonService } from '../../../services/common.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sidenav',
  imports: [MaterialModule, RouterOutlet, HeaderComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  appList:any=[];
  opened = true;
  activeRoute: string | undefined;
  panelOpenState = false;


  states = ['All State'];
  districts = ['All District'];
  panchayats = ['All Panchayat'];

  selectedState = 'All State';
  selectedDistrict = 'All District';
  selectedPanchayat = 'All Panchayat';

  categories = [
    { label: 'Road & Infrastructure', checked: true },
    { label: 'Education', checked: true },
    { label: 'Healthcare', checked: true },
    { label: 'Water Supply', checked: true },
    { label: 'Sanitation', checked: true }
  ];

  status = [
    { label: 'Planned', checked: true },
    { label: 'In Progress', checked: true },
    { label: 'Completed', checked: true },
    { label: 'Delayed', checked: true }
  ];

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


  /** *************************************** */
  exportData() {
    console.log('Exporting with filters:', {
      selectedState: this.selectedState,
      selectedDistrict: this.selectedDistrict,
      selectedPanchayat: this.selectedPanchayat,
      categories: this.categories,
      status: this.status,
      timePeriod: this.timePeriod,
      comparisonTool: this.comparisonTool
    });
  }
}
