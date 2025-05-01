import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { WidgetCardComponent } from '../widget-card/widget-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [MaterialModule, WidgetCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
