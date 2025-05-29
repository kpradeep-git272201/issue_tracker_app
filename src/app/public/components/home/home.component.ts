import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { SubHeaderComponent } from "../../layout/sub-header/sub-header.component";
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "../../../dashboard/components/dashboard/dashboard.component";
import { SidenavComponent } from "../../../layout/components/sidenav/sidenav.component";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
