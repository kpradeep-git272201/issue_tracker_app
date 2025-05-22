import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomSelectComponent } from "../custom-select/custom-select.component";
import { MaterialModule } from '../../../../material/material.module';


@Component({
  selector: 'app-dashboard-filter',
  imports: [CustomSelectComponent, MaterialModule],
  templateUrl: './dashboard-filter.component.html',
  styleUrl: './dashboard-filter.component.scss'
})
export class DashboardFilterComponent {
  @Output() dataEmitter = new EventEmitter<any>();
  @Input() opened: boolean = false;
  countries = [
    { name: 'India', code: 'IN' },
    { name: 'United States', code: 'US'},
    { name: 'Germany', code: 'DE' },
  
  ];
  
  selectedCountry: any = null;
  constructor(){

  }
}
