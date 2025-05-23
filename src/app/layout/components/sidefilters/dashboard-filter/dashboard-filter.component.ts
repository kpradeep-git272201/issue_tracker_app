import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../material/material.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-filter',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatIconModule
  ],
  templateUrl: './dashboard-filter.component.html',
  styleUrl: './dashboard-filter.component.scss'
})
export class DashboardFilterComponent {
  @Input() opened: boolean = false;

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

  constructor() {}
}
