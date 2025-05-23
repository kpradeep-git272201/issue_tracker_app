
import { Component, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { CustomSelectComponent } from "../custom-select/custom-select.component";


import { FinyearService } from '../../../../services/json/financialYear/finyear.service';
import { StateService } from '../../../../services/json/stateList/state.service';
import { ZpListService } from '../../../../services/json/zp/zp-list.service';
import { BpListService } from '../../../../services/json/bp/bp-list.service';
import { GpListService } from '../../../../services/json/gp/gp-list.service';
import { SharedService } from '../../../../services/filter/shared.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-dashboard-filter',
  standalone: true,
  imports: [
    MaterialModule,
    CustomSelectComponent
],
  templateUrl: './dashboard-filter.component.html',
  styleUrl: './dashboard-filter.component.scss'
})
export class DashboardFilterComponent {
  @Input() opened: boolean = false;
   @Output() dataEmitter = new EventEmitter<any>();
  financialYr: any[] = [];
  stateList: any[] = [];
  districtList: any[] = [];
  blockList: any[] = [];
  gpList: any[] = [];

  selectedFinancialYear: any = null;
  selectedState: any = null;
  selectedDistrict: any = null;
  selectedBlock: any = null;
  selectedGp: any = null;
  countries = [
    { name: 'India', code: 'IN' },
    { name: 'United States', code: 'US'},
    { name: 'Germany', code: 'DE' },
  
  ];
  filterGroups = [
    {
      title: 'Sector',
      categories: [
        { label: 'Road & Infrastructure', checked: true },
        { label: 'Education', checked: true },
        { label: 'Healthcare', checked: true },
        { label: 'Water Supply', checked: true },
        { label: 'Road & Infrastructure', checked: true },
        { label: 'Bridges', checked: true },
        { label: 'Sanitation', checked: true }
      ]
    },
    {
      title: 'Transport',
      categories: [
        { label: 'Road & Infrastructure', checked: true },
        { label: 'Bridges', checked: true },
        { label: 'Highways', checked: true }
      ]
    },
    {
      title: 'Urban Services',
      categories: [
        { label: 'Drainage', checked: true },
        { label: 'Pavement', checked: true },
        { label: 'Footpaths', checked: true },
        { label: 'Drainage', checked: true },
        { label: 'Pavement', checked: true },
        { label: 'Footpaths', checked: true }
      ]
    },
    {
      title: 'Utilities',
      categories: [
        { label: 'Power Supply', checked: true },
        { label: 'Street Lighting', checked: true },
        { label: 'Electric Poles', checked: true },
        { label: 'Street Lighting', checked: true },
        { label: 'Electric Poles', checked: true }
      ]
    }
  ];
  selectedCountry: any = null;
  constructor(   private finYrService: FinyearService,
    private stateService: StateService,
    private zpListServive: ZpListService,
    private bpListService: BpListService,
    private gpListService: GpListService,
    private sharedService : SharedService){ }

  ngOnInit(): void {
    this.financialYr = [
      { code: '0', name: 'ALL' },
      ...this.finYrService.getFinYr()
    ];
  
    this.stateList = [
      { code: 0, value: 'ALL' },
      ...this.stateService.getStateList()
    ];
  }
   
  onStateSelected(event: any): void {  
    this.selectedState = event || null;
    this.selectedDistrict = null;
    this.selectedBlock = null;
    this.selectedGp = null;
    this.blockList = [];
    this.gpList = [];

    if (!event) {
      this.districtList = [];
      return;
    }

    const zpData = this.zpListServive.getZpList();
    
    const matchedState = zpData.find(entry => entry.stateCode === event.code);
    this.districtList = matchedState
  ? [{ code: 0, value: 'ALL' }, ...matchedState.zpList]
  : [];
  }

  onDistrictSelected(event: any): void {
    this.selectedDistrict = event || null;
    this.selectedBlock = null;
    this.selectedGp = null;
    this.gpList = [];

    if (!event) {
      this.blockList = [];
      return;
    }

    const bpData = this.bpListService.getBpList();
    const matchedDistrict = bpData.find(entry => entry.zpCode === event.code);
    this.blockList = matchedDistrict
    ? [{ code: 0, value: 'ALL' }, ...matchedDistrict.bpList]
    : [];
  }

  onBlockSelected(event: any): void {
    this.selectedBlock = event || null;
    this.selectedGp = null;

    if (!event) {
      this.gpList = [];
      return;
    }

    const gpData = this.gpListService.getGpList();
    const matchedBlock = gpData.find(entry => entry.bpCode === event.code);
    this.gpList = matchedBlock
    ? [{ code: 0, value: 'ALL' }, ...matchedBlock.gpList]
    : []; 
  }

  onGpSelected(event: any): void {
    this.selectedGp = event || null;
  }


  applyFilter(): void {
    const selectedFilters = {
      financialYear: this?.selectedFinancialYear?.code ?? null,
      stateCode: this?.selectedState?.code ?? null,
      districtCode: this?.selectedDistrict?.code ?? null,
      blockCode: this?.selectedBlock?.code ?? null,
      gpCode: this?.selectedGp?.code ?? null
    };
  
    this.dataEmitter.emit(selectedFilters);
    this.sharedService.updateDataFilter(selectedFilters);
  }
  


}
