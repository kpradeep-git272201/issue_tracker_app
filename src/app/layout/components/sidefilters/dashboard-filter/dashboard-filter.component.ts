import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomSelectComponent } from "../custom-select/custom-select.component";
import { MaterialModule } from '../../../../material/material.module';

import { FinyearService } from '../../../../services/json/financialYear/finyear.service';
import { StateService } from '../../../../services/json/stateList/state.service';
import { ZpListService } from '../../../../services/json/zp/zp-list.service';
import { BpListService } from '../../../../services/json/bp/bp-list.service';
import { GpListService } from '../../../../services/json/gp/gp-list.service';
import { SharedService } from '../../../../services/filter/shared.service';

@Component({
  selector: 'app-dashboard-filter',
  imports: [CustomSelectComponent, MaterialModule],
  templateUrl: './dashboard-filter.component.html',
  styleUrl: './dashboard-filter.component.scss'
})
export class DashboardFilterComponent {
  @Output() dataEmitter = new EventEmitter<any>();
  @Input() opened: boolean = false;

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

  constructor(
    private finYrService: FinyearService,
    private stateService: StateService,
    private zpListServive: ZpListService,
    private bpListService: BpListService,
    private gpListService: GpListService,
    private sharedService : SharedService
  ) {}

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
