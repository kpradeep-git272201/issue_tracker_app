import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-time-period',
  imports: [MaterialModule],
  templateUrl: './time-period.component.html',
  styleUrl: './time-period.component.scss'
})
export class TimePeriodComponent {
  @Input() opened: boolean = false;
  timePeriod = 2023;
  constructor(){

  }
}
