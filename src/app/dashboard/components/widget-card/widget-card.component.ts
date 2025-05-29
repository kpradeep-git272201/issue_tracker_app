import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { InrFormatPipe } from "../../../pipes/currency/inr-format.pipe";

@Component({
  selector: 'app-widget-card',
  imports: [MaterialModule, SharedModule, InrFormatPipe],
  templateUrl: './widget-card.component.html',
  styleUrl: './widget-card.component.scss'
})
export class WidgetCardComponent {
  cards = [
    {
      title: 'Budgetary Allocation (In Cr)',
      value: '12,450.75',
      amountType: 'Cr',
      change: 8.2,
      trend: 'up',
      icon: 'TotalRequests',
      iconBg: 'blue-bg'
    },
    {
      title: 'Fund Allocation (In Cr)',
      value: '8,982.40',
      amountType: 'Cr',
      change: 18.2,
      trend: 'up',
      icon: 'Currency',
      iconBg: 'green-bg'
    },
    {
      title: 'Expenditure Incurred (In Cr)',
      value: '12,450.75',
      amountType: 'Cr',
      change: -3.2,
      trend: 'down',
      icon: 'Remaining',
      iconBg: 'yellow-bg'
    },
   /*  {
      title: 'Completed Projects',
      value: '1,258',
      amountType: 'Dr', 
      change: 8.2,
      trend: 'up',
      icon: 'CompletedProjects',
      iconBg: 'purple-bg'
    } */
  ];
  

  constructor(){

  }
}
