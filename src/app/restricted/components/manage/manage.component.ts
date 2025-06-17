import { Component, computed, Input, signal } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMenuComponent } from '../../../dialog-module/column-menu/column-menu.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-manage',
  imports: [MaterialModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
@Input() set data(value: any[]) {
    this._data.set(value);
  }
  private _data = signal<any[]>([]);
  get data() {
    return this._data();
  }

  @Input() set columns(value: any[]) {
    this._columns.set(value);
    this.visibleColumnFields.set(value.filter(col => col.visible !== false).map(col => col.field));
  }
  private _columns = signal<any[]>([]);
  get columns() {
    return this._columns();
  }

  @Input() enableGlobalSearch = true;
  @Input() title :string | undefined;
  visibleColumnFields = signal<string[]>([]);
  searchText = signal('');
  columnFilters = signal<{ [key: string]: string }>({});

  globalFilter = '';
  currentPage = 1;
  pageSize = 10;

  // Sorting signals
  sortField = signal<string | null>(null);
  sortAsc = signal<boolean>(true);

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.visibleColumnFields.set(
      this.columns.filter(col => col.visible !== false).map(col => col.field)
    );
  }

  displayedColumns(): string[] {
    return this.columns
      .filter(col => this.visibleColumnFields().includes(col.field))
      .map(col => col.field);
  }

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

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  onPageSizeChange(newSize: number) {
    this.pageSize = newSize;
    this.currentPage = 1; 
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

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  }

  getColumnMenu() {
    const dialogRef = this.dialog.open(ColumnMenuComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '350px',
      panelClass: 'custom-login-dialog',
      data: {
        title: 'Column Menu',
        columns: this.columns
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (Array.isArray(result)) {
        this.visibleColumnFields.set(result);
      }
    });
  }

  exportExcel() {
    const fileName = "ExcelSheet.xlsx";
    let data = document.getElementById("table-data");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, fileName);
  }
}
