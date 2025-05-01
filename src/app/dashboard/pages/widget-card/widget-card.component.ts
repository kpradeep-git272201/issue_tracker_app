import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { InrFormatPipe } from "../../../pipes/inr-format.pipe";

@Component({
  selector: 'app-widget-card',
  imports: [MaterialModule, SharedModule, InrFormatPipe],
  templateUrl: './widget-card.component.html',
  styleUrl: './widget-card.component.scss'
})
export class WidgetCardComponent {
  cards = [
    {
      title: 'Total Requests',
      value: '12,450.75',
      amountType: 'Cr',
      change: 8.2,
      trend: 'up',
      icon: 'TotalRequests',
      iconBg: 'blue-bg'
    },
    {
      title: 'Utilized Funds',
      value: '8,982.40',
      amountType: 'Cr',
      change: 18.2,
      trend: 'up',
      icon: 'Currency',
      iconBg: 'green-bg'
    },
    {
      title: 'Remaining Funds',
      value: '12,450.75',
      amountType: 'Cr',
      change: -3.2,
      trend: 'down',
      icon: 'Remaining',
      iconBg: 'yellow-bg'
    },
    {
      title: 'Completed Projects',
      value: '1,258',
      amountType: 'Dr', // Not an amount, so no Cr/Dr
      change: 8.2,
      trend: 'up',
      icon: 'CompletedProjects',
      iconBg: 'purple-bg'
    }
  ];
  

  constructor(){

  }
}
