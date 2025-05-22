import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-dashboard-filter',
  imports: [],
  templateUrl: './dashboard-filter.component.html',
  styleUrl: './dashboard-filter.component.scss'
})
export class DashboardFilterComponent {
  @Output() dataEmitter = new EventEmitter<any>();
  @Input() opened: boolean = false;

  constructor(){

  }
}
