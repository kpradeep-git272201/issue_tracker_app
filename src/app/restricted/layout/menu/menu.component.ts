import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonService } from '../../../services/planning/common.service';
import { SharedService } from '../../../services/filter/shared.service';
import { RouterOutlet } from '@angular/router';
import { MenubarItemsService } from '../../../services/json/menubar-items.service';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-menu',
  imports: [MaterialModule, RouterOutlet,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  appList: any = [];
  opened = true;
  activeRoute: string | undefined;
  panelOpenState = false;
  timePeriod = 2023;
  comparisonTool = false;
  menubarList :any = [];

  constructor(
    private commonService: CommonService,
    private sharedService: SharedService,
    private menubarItemsService: MenubarItemsService,
  ) {}

  ngOnInit() {
    this.appList = this.commonService.getAppList();
    this.getMenubarList();
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

  getMenubarList(){
    let menuBar = this.menubarItemsService.getPanelItems();
    if(menuBar.length >0){
      this.menubarList = menuBar
    }
  }
}
