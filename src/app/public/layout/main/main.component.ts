import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SidenavComponent } from "../../../layout/components/sidenav/sidenav.component";
import { DashboardComponent } from "../../../dashboard/components/dashboard/dashboard.component";

import { SubHeaderComponent } from "../sub-header/sub-header.component";
import { HeaderComponent } from '../header/header.component';
import { TopHeaderComponent } from '../../../top-header/top-header.component';



@Component({
  selector: 'app-main',
  imports: [HeaderComponent, SubHeaderComponent, SidenavComponent,TopHeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
 
 constructor() {}

 ngOnInit(): void {
    
  }
}
