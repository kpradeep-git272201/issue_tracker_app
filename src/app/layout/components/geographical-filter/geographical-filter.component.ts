import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonService } from '../../../services/planning/common.service';
import { any } from '@amcharts/amcharts5/.internal/core/util/Array';
import { SharedService } from '../../../services/filter/shared.service';
import { FinyearService } from '../../../services/json/financialYear/finyear.service';

@Component({
  selector: 'app-geographical-filter',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './geographical-filter.component.html',
  styleUrl: './geographical-filter.component.scss'
})
export class GeographicalFilterComponent {
  @Output() dataEmitter = new EventEmitter<any>();
  @Input() opened: boolean = false;
  stateList: any[] = [];
  districtList: any[] = [];
  selectedFincialYr = '';
  selectedStateCode: number | null = null;
  selectedDistrictCode: number | null = null;
  financialYr: any=[];

  constructor(private commonService: CommonService,
    private sharedService: SharedService,
    private finYrService: FinyearService
  ) {}

  ngOnInit(): void {
    this.stateList = this.commonService.getStateList();
    this.financialYr=this.finYrService.getFinYr();
  }

  onStateChange(stateCode: number | null): void {
    if (stateCode === null) {
      this.districtList = [];
      this.selectedDistrictCode = null;
      return;
    }
  
    this.selectedStateCode = stateCode;
    this.districtList = this.commonService.getDistrictList(stateCode);
  }
  

  applyFilter() {
    const selectedFilters = {
      financialYear: this.selectedFincialYr,
      stateCode: this.selectedStateCode,
      districtCode: this.selectedDistrictCode
    };
    this.dataEmitter.emit(selectedFilters);
    this.sharedService.updateDataFilter(selectedFilters);
  }

  
}
