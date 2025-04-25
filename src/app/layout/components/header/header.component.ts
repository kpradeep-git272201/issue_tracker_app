import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-header',
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  opened=true;
  activeTab = 'Dashboard';
  @Output() openedStatus = new EventEmitter<any>();


  openedSideNav(){
    this.opened=!this.opened;
    this.openedStatus.emit(this.opened)
  }
  setActiveTab(tab: string): void {
    this.activeTab = tab;
   
  }

  onTabClick(tab: string): void {
    console.log('Tab clicked:', tab);
    this.setActiveTab(tab);
    // // Example: navigation
    // switch (tab) {
    //   case 'Dashboard':
    //     this.router.navigate(['/dashboard']);
    //     break;
    //   case 'report':
    //     this.router.navigate(['/report']);
    //     break;
    //   // Add more cases as needed
    // }
  }
}
