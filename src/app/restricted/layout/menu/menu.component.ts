import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonService } from '../../../services/planning/common.service';
import { SharedService } from '../../../services/filter/shared.service';
import { RouterOutlet } from '@angular/router';
import { MenubarItemsService } from '../../../services/json/menubar-items.service';
import { RouterModule } from '@angular/router';
import { LabelService } from '../../../services/json/label.service';
import { AccountingService } from '../../../services/restricted/accounting/accounting.service';

@Component({
  selector: 'app-menu',
  imports: [MaterialModule, RouterOutlet, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  appList: any = [];
  opened = true;
  activeRoute: string | undefined;
  panelOpenState = false;
  timePeriod = 2023;
  comparisonTool = false;
  menubarList: any = [];
  labels: any = {};

  constructor(
    private commonService: CommonService,
    private sharedService: SharedService,
    private menubarItemsService: MenubarItemsService,
    private labelService: LabelService,
    private accountingService: AccountingService,
  ) {}

  ngOnInit() {
    this.appList = this.commonService.getAppList();
    this.labels = this.labelService.getLabelJson();
    this.getMenubarList();
  }

  getOpenedStat(event: any) {
    this.opened = event;
  }
  getOpenSidenav() {
    this.opened = !this.opened;
  }

  /** *************************************** */
  exportData() {}

  getMenubarList() {
    const role = 'role=VA';
    this.accountingService.getMenus(role).subscribe(
      (resp: any) => {
        if (resp?.status == 200) {
          this.menubarList = resp.body;
        } else {
        }
      },
      (error: any) => {
        console.log('Login error', error);
      },
    );
  }
}
