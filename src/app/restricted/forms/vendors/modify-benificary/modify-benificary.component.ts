import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';

@Component({
  selector: 'app-modify-benificary',
  imports: [MaterialModule],
  templateUrl: './modify-benificary.component.html',
  styleUrl: './modify-benificary.component.scss'
})
export class ModifyBenificaryComponent {
agencies = [
    { name: 'ABC' },
    { name: 'adwefde' },
    { name: 'Agency1aa' },
    { name: 'Agency kerala1' },
    { name: 'agency name' },
    { name: 'Ahmad' },
    { name: 'AKS' },
    { name: 'Amit' },
    { name: 'Anil' },
    { name: 'ANil K' },
    { name: 'Next Agency' },
    // Add up to 48 for demo
  ];

  entriesPerPage = 10;
  currentPage = 0;
  paginatedAgencies:any = [];
  searchText = '';
Math: any;

  constructor(){

  }

  get totalPages() {
    return Math.ceil(this.filteredAgencies.length / this.entriesPerPage);
  }

  get pages() {
    return [...Array(this.totalPages).keys()];
  }

  get filteredAgencies() {
    if (!this.searchText) return this.agencies;
    return this.agencies.filter(a => a.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  ngOnInit() {
    this.onPageSizeChange(10);
  }

  onPageSizeChange(newSize: number) {
    const start = this.currentPage * this.entriesPerPage;
    const end = start + this.entriesPerPage;
    this.paginatedAgencies = this.filteredAgencies.slice(start, end);
  }

  changePage(page: number) {
    if (page < 0 || page >= this.totalPages) return;
    this.currentPage = page;
    this.onPageSizeChange(this.currentPage);
  }

  //   onPageSizeChange(newSize: number) {
  //   this.pageSize = newSize;
  //   this.currentPage = 1; 
  // }
}
