import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonService } from '../../../services/common.service';
import { any } from '@amcharts/amcharts5/.internal/core/util/Array';

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
  financialYr = ['2025-2026', '2024-2025', '2023-2024', '2022-2023'];

  stateList: any[] = [];
  districtList: any[] = [];

  selectedFincialYr = '';
  selectedStateCode: number | null = null;
  selectedDistrictCode: number | null = null;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.stateList = this.commonService.getStateList();
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
    // this.commonService.setFilteredData(selectedFilters);
        // this.commonService.setFilteredData(selectedFilters);
  }

  
}
