import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonService } from '../../../services/common.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

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

  constructor(private commonService: CommonService){

  }

  ngOnInit(){
    this.appList = this.commonService.getAppList();
  }

  getOpenedStat(event: any) {
    this.opened = event;
  }
}
