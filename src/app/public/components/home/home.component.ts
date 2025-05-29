import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { SubHeaderComponent } from "../../layout/sub-header/sub-header.component";
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "../../../dashboard/components/dashboard/dashboard.component";
import { SidenavComponent } from "../../../layout/components/sidenav/sidenav.component";

@Component({
  selector: 'app-home',
  imports: [DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
dashboardId: any;
 constructor(private route: ActivatedRoute) {}

 ngOnInit(): void {
   this.route.paramMap.subscribe(params => {
      this.dashboardId = params.get('id');
      console.log('Updated ID:', this.dashboardId);
    });
  }
}
