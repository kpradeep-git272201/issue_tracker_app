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

  constructor(private commonService: CommonService) {

  }

  ngOnInit() {

  }
}
