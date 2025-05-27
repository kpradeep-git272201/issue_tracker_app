/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePeriodComponent } from './time-period.component';

describe('TimePeriodComponent', () => {
  let component: TimePeriodComponent;
  let fixture: ComponentFixture<TimePeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimePeriodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */
/* 
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-time-period',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './time-period.component.html',
  styleUrl: './time-period.component.scss'
})
export class TimePeriodComponent {
  @Input() opened: boolean = false;
  timePeriod = 2020;
  currentYear = new Date().getFullYear(); // Dynamically gets current year

  constructor() {}
}
 */

import {
  Component,
  ElementRef,
  Input,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
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
export class TimePeriodComponent implements OnInit, OnDestroy {
  @Input() opened: boolean = false;
  timePeriod = 2020;
  currentYear = new Date().getFullYear();

  tooltipX = 0;
  showTooltip = false;
  private allowClose = false;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    // Small delay before outside clicks can close tooltip
    document.addEventListener('click', this.onDocumentClick);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.onDocumentClick);
  }

  onMouseMove(event: MouseEvent): void {
    this.tooltipX = event.offsetX;
  }

  onSliderClick(event: MouseEvent): void {
    this.tooltipX = event.offsetX;
    this.showTooltip = true;
    this.allowClose = false;

    // Delay to avoid immediate close by this same click
    setTimeout(() => {
      this.allowClose = true;
    }, 100);
  }

  onDocumentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (this.allowClose && !this.elRef.nativeElement.contains(target)) {
      this.showTooltip = false;
    }
  };
}
