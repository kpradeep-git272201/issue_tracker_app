import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sub-header',
  imports: [MaterialModule],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent {
  opened = true;
  activeTab: string = 'Dashboard';
  showCategories = false;

  @Output() openedStatus = new EventEmitter<any>();

  selectedCategory: any = 1;

  categories = [
    { value: 'Planning and Reporting Dashboard', code: 1 },
    // { value: 'Profile Dashboard' , code: 2},
    // { value: 'LGD Dashboard' , code: 3},
    //  { value: 'Audit Online Dashboard' , code: 4}
  ];

  constructor(private router: Router){

  }
  openedSideNav() {
    this.opened = !this.opened;
    this.openedStatus.emit(this.opened);
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  onTabClick(tab: string): void {
    console.log('Tab clicked:', tab);
    this.setActiveTab(tab);

    if (tab === 'Dashboard') {
      this.showCategories = true;
      this.selectedCategory = 1;
    } else {
      this.showCategories = false;
    }
  }

  onMouseEnterDashboard(): void {
    this.showCategories = true;
  }

  onMouseLeaveDashboard(): void {
    this.showCategories = false;
  }

  onCategorySelect(category:any): void {
    this.selectedCategory = category.code;
    if(this.selectedCategory){ // Integrated dashboard
      this.router.navigate(['/public/dashboard', category.code]);
    }
  }

  getPublicHome(){
    this.router.navigate(["/"])
  }
}
