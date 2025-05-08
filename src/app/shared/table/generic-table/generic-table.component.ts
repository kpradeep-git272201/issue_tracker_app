import { Component, computed, Input, signal } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';



@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss'
})
export class GenericTableComponent {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  @Input() enableGlobalSearch = true;

  searchText = signal('');
  columnFilters = signal<{ [key: string]: string }>({});

  globalFilter = '';
  currentPage = 1;
  pageSize = 10;

  // Sorting signals
  sortField = signal<string | null>(null);
  sortAsc = signal<boolean>(true);

  //Computed filteredRows (reactive)
  filteredRows = computed(() => this.filteredData());

  filteredData = computed(() => {
    let result = [...this.data];

    const global = this.searchText().toLowerCase();
    if (global) {
      result = result.filter((row: any) => {
        return this.columns.some((col: any) => {
          return row[col.field]?.toString().toLowerCase().includes(global);
        });
      });
    }

    // Column-wise filtering
    const filters = this.columnFilters();
    Object.keys(filters).forEach(field => {
      const val = filters[field];
      if (val) {
        result = result.filter(row => row[field] === val);
      }
    });

    // Sorting
    const field = this.sortField();
    if (field) {
      const asc = this.sortAsc();
      result.sort((a, b) => {
        if (a[field] > b[field]) return asc ? 1 : -1;
        if (a[field] < b[field]) return asc ? -1 : 1;
        return 0;
      });
    }

    return result;
  });

  sortBy(field: string) {
    if (this.sortField() === field) {
      this.sortAsc.set(!this.sortAsc());
    } else {
      this.sortField.set(field);
      this.sortAsc.set(true);
    }
  }

  displayedColumns(): string[] {
    return this.columns.filter(col => col.visible).map(col => col.field);
  }

  applyGlobalFilter() {
    this.searchText.set(this.globalFilter.toLowerCase());
    this.currentPage = 1;
  }

  pagedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredRows().slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.filteredRows().length / this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
