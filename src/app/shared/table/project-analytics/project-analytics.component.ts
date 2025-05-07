import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-project-analytics',
  imports: [MaterialModule],
  templateUrl: './project-analytics.component.html',
  styleUrl: './project-analytics.component.scss'
})
export class ProjectAnalyticsComponent implements AfterViewInit {
  displayedColumns: string[] = ['projectName', 'district', 'scheme', 'allocated', 'utilized', 'progress', 'status', 'actions'];
  PROJECT_DATA = [
    {
      projectName: 'Varanasi Road Development',
      district: 'Varanasi',
      scheme: 'PMGSY',
      allocated: 2.55,
      utilized: 1.25,
      progress: 25,
      status: 'PMGSY'
    },
    {
      projectName: 'Lucknow Drainage Upgrade',
      district: 'Lucknow',
      scheme: 'AMRUT',
      allocated: 4.20,
      utilized: 2.10,
      progress: 50,
      status: 'Ongoing'
    },
    {
      projectName: 'Gorakhpur Smart Lighting',
      district: 'Gorakhpur',
      scheme: 'Smart City',
      allocated: 3.00,
      utilized: 1.80,
      progress: 60,
      status: 'Ongoing'
    },
    {
      projectName: 'Kanpur Sewage Treatment',
      district: 'Kanpur',
      scheme: 'Namami Gange',
      allocated: 5.75,
      utilized: 3.40,
      progress: 59,
      status: 'Critical'
    },
    {
      projectName: 'Agra Heritage Restoration',
      district: 'Agra',
      scheme: 'HRIDAY',
      allocated: 6.10,
      utilized: 5.90,
      progress: 97,
      status: 'Near Completion'
    },
    {
      projectName: 'Prayagraj Riverfront Beautification',
      district: 'Prayagraj',
      scheme: 'Namami Gange',
      allocated: 7.00,
      utilized: 6.85,
      progress: 98,
      status: 'Completed'
    },
    {
      projectName: 'Meerut Metro Phase 1',
      district: 'Meerut',
      scheme: 'Metro Project',
      allocated: 25.00,
      utilized: 10.50,
      progress: 42,
      status: 'Ongoing'
    },
    {
      projectName: 'Ayodhya Cultural Center',
      district: 'Ayodhya',
      scheme: 'State Funded',
      allocated: 8.50,
      utilized: 7.75,
      progress: 91,
      status: 'Near Completion'
    },
    {
      projectName: 'Noida Smart Traffic Management',
      district: 'Noida',
      scheme: 'Smart City',
      allocated: 4.90,
      utilized: 3.00,
      progress: 61,
      status: 'Ongoing'
    },
    {
      projectName: 'Jhansi Water Pipeline',
      district: 'Jhansi',
      scheme: 'Jal Jeevan Mission',
      allocated: 3.20,
      utilized: 2.95,
      progress: 92,
      status: 'Completed'
    }
  ];
  dataSource = new MatTableDataSource(this.PROJECT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 

  
  constructor(){

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  export() {
    const worksheet = XLSX.utils.json_to_sheet(this.PROJECT_DATA);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(blob, 'ProjectData.xlsx');
  }
}
