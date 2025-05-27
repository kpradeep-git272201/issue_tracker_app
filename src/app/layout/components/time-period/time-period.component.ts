import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-time-period',
  standalone: true,
  imports: [CommonModule, MaterialModule, MatTooltipModule],
  templateUrl: './time-period.component.html',
  styleUrls: ['./time-period.component.scss'],
})
export class TimePeriodComponent {
  @Input() opened = false;
  timePeriod = 2020;
  currentYear = new Date().getFullYear();

  tooltipX = 0;
  showTooltip = false;

  onMouseMove(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;

    let x = event.offsetX;

    const maxX = container.clientWidth;
    const tooltipWidth = 40; 
    if (x + tooltipWidth > maxX) {
      x = maxX - tooltipWidth;
    }
    if (x < 0) {
      x = 0;
    }

    this.tooltipX = x;
  }
}
 