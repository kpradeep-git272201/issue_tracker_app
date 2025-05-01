import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { WidgetCardComponent } from '../widget-card/widget-card.component';
import { SharedModule } from '../../../shared/shared.module';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-dashboard',
  imports: [MaterialModule, WidgetCardComponent, SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  donutData: any = [];
  pieData: any = [];
  barData: any = [];

  constructor(private commonService: CommonService) {

  }

  ngOnInit() {
    this.donutData = this.commonService.getDonutData();
    this.pieData = this.commonService.getPieData();
    this.barData = this.commonService.getBarData();
  }
}
