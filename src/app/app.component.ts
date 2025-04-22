import { Component } from '@angular/core';
import { SidenavComponent } from "./layout/components/sidenav/sidenav.component";

@Component({
  selector: 'app-root',
  imports: [SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'integrated_dashboard';
  opened: any=true;

  constructor(){

  }

  
  getOpenedStat(event: any) {
    this.opened = event;
  }
  
}
