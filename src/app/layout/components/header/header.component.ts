

import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  opened = true;
  activeTab: string = 'Dashboard';
  showCategories = false;

  @Output() openedStatus = new EventEmitter<any>();

  selectedCategory: string = 'Planning'; 

  categories = [
    { label: 'Planning' },
    { label: 'Accounting' },
    { label: 'Audit' }
  ];

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
      this.selectedCategory = 'Planning'; 
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

  onCategorySelect(label: string): void {
    this.selectedCategory = label;
  }
}
