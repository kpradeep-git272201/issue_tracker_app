import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-project-status',
  imports: [MaterialModule],
  templateUrl: './project-status.component.html',
  styleUrl: './project-status.component.scss'
})
export class ProjectStatusComponent {
  @Input() opened: boolean = false;

  status = [
    { label: 'Planned', checked: true },
    { label: 'In Progress', checked: true },
    { label: 'Completed', checked: true },
    { label: 'Delayed', checked: true }
  ];
  
  constructor(){

  }

}
