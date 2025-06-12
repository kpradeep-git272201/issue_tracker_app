import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardComponent } from '../../../dashboard/components/dashboard/dashboard.component';

@Component({
  selector: 'app-pub-dashboard',
  imports: [DashboardComponent],
  templateUrl: './pub-dashboard.component.html',
  styleUrl: './pub-dashboard.component.scss'
})
export class PubDashboardComponent {
dashboardId: any;
 constructor(private route: ActivatedRoute) {}

 ngOnInit(): void {
   this.route.paramMap.subscribe(params => {
      this.dashboardId = params.get('dashboardId');
    });
  }
}
