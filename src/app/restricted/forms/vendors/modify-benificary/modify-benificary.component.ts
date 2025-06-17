import { Component, computed } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { ManageComponent } from "../../../components/manage/manage.component";

@Component({
  selector: 'app-modify-benificary',
  imports: [MaterialModule, ManageComponent],
  templateUrl: './modify-benificary.component.html',
  styleUrl: './modify-benificary.component.scss'
})
export class ModifyBenificaryComponent {
   globalFilter = '';
  currentPage = 1;
  pageSize = 10;

  columns=[
    {attrId: "agencyDetails", attrName: "Label.AgencyDetails"}
  ]
  data = [
    { agencyDetails: 'AXIS Bank' },
    { agencyDetails: 'AXIS Bank' },
    { agencyDetails: 'AXIS Bank' },
    { agencyDetails: 'PUNJAB NATIONAL BANK' },
    { agencyDetails: 'Allahabad Bank' },
    { agencyDetails: 'BANK OF INDIA'},
    { agencyDetails: 'BANK OF INDIA' },
    { agencyDetails: 'BANK OF INDIA'},
    { agencyDetails: 'BANK OF INDIA' },
    { agencyDetails: 'BANK OF INDIA' }
  ];

  filteredData = [...this.data];

  applyGlobalFilter() {
    const filter = this.globalFilter.trim().toLowerCase();
    this.filteredData = this.data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(filter)
      )
    );
    this.currentPage = 1;
  }

  filteredRows() {
    return this.filteredData;
  }

  pagedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredRows().slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.filteredRows().length / this.pageSize);
  }

  get pageNumbers(): number[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const range: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, current - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;

    if (end > total) {
      end = total;
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) range.push(i);
    return range;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }

  onPageSizeChange(newSize: number) {
    this.pageSize = newSize;
    this.currentPage = 1;
  }
}
