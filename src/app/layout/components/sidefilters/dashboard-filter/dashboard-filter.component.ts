
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { CustomSelectComponent } from "../custom-select/custom-select.component";



@Component({
  selector: 'app-dashboard-filter',
  standalone: true,
  imports: [
    MaterialModule,
    CustomSelectComponent
],
  templateUrl: './dashboard-filter.component.html',
  styleUrl: './dashboard-filter.component.scss'
})
export class DashboardFilterComponent {
  @Input() opened: boolean = false;

  countries = [
    { name: 'India', code: 'IN' },
    { name: 'United States', code: 'US'},
    { name: 'Germany', code: 'DE' },
  
  ];
  filterGroups = [
    {
      title: 'Sector',
      categories: [
        { label: 'Road & Infrastructure', checked: true },
        { label: 'Education', checked: true },
        { label: 'Healthcare', checked: true },
        { label: 'Water Supply', checked: true },
        { label: 'Road & Infrastructure', checked: true },
        { label: 'Bridges', checked: true },
        { label: 'Sanitation', checked: true }
      ]
    },
    {
      title: 'Transport',
      categories: [
        { label: 'Road & Infrastructure', checked: true },
        { label: 'Bridges', checked: true },
        { label: 'Highways', checked: true }
      ]
    },
    {
      title: 'Urban Services',
      categories: [
        { label: 'Drainage', checked: true },
        { label: 'Pavement', checked: true },
        { label: 'Footpaths', checked: true },
        { label: 'Drainage', checked: true },
        { label: 'Pavement', checked: true },
        { label: 'Footpaths', checked: true }
      ]
    },
    {
      title: 'Utilities',
      categories: [
        { label: 'Power Supply', checked: true },
        { label: 'Street Lighting', checked: true },
        { label: 'Electric Poles', checked: true },
        { label: 'Street Lighting', checked: true },
        { label: 'Electric Poles', checked: true }
      ]
    }
  ];
  selectedCountry: any = null;
  constructor(){

  }


  getEvent(event:any){
    console.log(event);
  }
}
