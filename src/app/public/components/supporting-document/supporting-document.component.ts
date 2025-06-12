import { Component, computed, Input, signal } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-supporting-document',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './supporting-document.component.html',
  styleUrls: ['./supporting-document.component.scss'],
})
export class SupportingDocumentComponent {
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

  enableGlobalSearch = true;
  visibleColumnFields = signal<string[]>([]);
  searchText = signal('');
  columnFilters = signal<{ [key: string]: string }>({});

  globalFilter = '';
  currentPage = 1;
  pageSize = 5;

  sortField = signal<string | null>(null);
  sortAsc = signal<boolean>(true);

  activeFilter: string = 'all';

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.visibleColumnFields.set(
      this.columns.filter(col => col.visible !== false).map(col => col.field)
    );
    this.filteredDocuments = [...this.documents];
  }

  displayedColumns(): string[] {
    return this.columns
      .filter(col => this.visibleColumnFields().includes(col.field))
      .map(col => col.field);
  }

  documents = [
    { title: 'pfms', category: 'pfms', description: 'PFMS file', updated: '2024-12-01', language: 'English', fileSize: '2MB' },
    { title: 'egramswaraj-pfms', category: 'pfms', description: 'PFMS file', updated: '2024-12-01', language: 'English', fileSize: '2MB' },
    { title: 'sops1', category: 'sops', description: 'PFMS file', updated: '2024-12-01', language: 'English', fileSize: '2MB' },
    { title: 'sops2', category: 'sops', description: 'PFMS file', updated: '2024-12-01', language: 'English', fileSize: '2MB' },
    { title: 'SOP Doc', category: 'sops', description: 'Standard Procedure', updated: '2024-11-10', language: 'Hindi', fileSize: '1MB' },
    { title: 'Manual 1', category: 'manual', description: 'User Manual file', updated: '2024-10-05', language: 'English', fileSize: '3MB' },
    { title: 'Manual 2', category: 'manual', description: 'User Manual file', updated: '2024-10-05', language: 'English', fileSize: '3MB' },
    { title: 'Manual 3', category: 'manual', description: 'User Manual file', updated: '2024-10-05', language: 'English', fileSize: '3MB' },
    { title: 'Manual 4', category: 'manual', description: 'User Manual file', updated: '2024-10-05', language: 'English', fileSize: '3MB' },
  ];

  filteredDocuments: any[] = [];

  filterDocuments(type: string) {
    this.activeFilter = type;
    this.currentPage = 1; 
    if (type === 'all') {
      this.filteredDocuments = [...this.documents];
    } else {
      this.filteredDocuments = this.documents.filter(doc => doc.category === type);
    }
  }

  applyGlobalFilter() {
    const filter = this.globalFilter.toLowerCase();
    this.currentPage = 1;

    if (!filter) {
      this.filterDocuments(this.activeFilter);
      return;
    }

    this.filteredDocuments = this.documents.filter(doc => {
      return (
        doc.title.toLowerCase().includes(filter) ||
        doc.description.toLowerCase().includes(filter) ||
        doc.category.toLowerCase().includes(filter) ||
        doc.language.toLowerCase().includes(filter)
      );
    });

    if (this.activeFilter !== 'all') {
      this.filteredDocuments = this.filteredDocuments.filter(doc => doc.category === this.activeFilter);
    }
  }

  pagedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredDocuments.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.filteredDocuments.length / this.pageSize) || 1;
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

 
}
