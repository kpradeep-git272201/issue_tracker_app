import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { WidgetCardComponent } from '../widget-card/widget-card.component';
import { SharedModule } from '../../../shared/shared.module';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, WidgetCardComponent, SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  breakpoint: number = 3;
  isBrowser: boolean = false;

  constructor(
    private commonService: CommonService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.setGridBreakpoint(window.innerWidth);
    }
  }

  onResize(event: any) {
    if (this.isBrowser) {
      this.setGridBreakpoint(event.target.innerWidth);
    }
  }

  private setGridBreakpoint(width: number) {
    this.breakpoint = width <= 768 ? 1 : 2;
  }
}

//TEST1