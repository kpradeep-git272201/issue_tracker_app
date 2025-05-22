import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BehaviorSubject, combineLatest } from 'rxjs';

// Angular Material Modules
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';

// Services
import { CommonService } from '../../../services/planning/common.service';
import { SharedService } from '../../../services/filter/shared.service';

@Component({
  selector: 'app-geographical-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule, 
    MatButtonModule
  ],
  templateUrl: './geographical-filter.component.html',
  styleUrl: './geographical-filter.component.scss'
})
export class GeographicalFilterComponent implements OnInit {
  @Output() dataEmitter = new EventEmitter<any>();
  @Input() opened: boolean = false;

  financialYr = ['2025-2026', '2024-2025', '2023-2024', '2022-2023'];
  stateList: any[] = [];
  districtList: any[] = [];
  private districtList$ = new BehaviorSubject<any[]>([]);

  selectedFincialYr = '';
  selectedStateCode: number | null = null;
  selectedDistrictCode: number | null = null;

  financialYrCtrl = new FormControl('');
  stateCtrl = new FormControl('');
  districtCtrl = new FormControl('');

  filteredFinancialYr!: Observable<string[]>;
  filteredStates!: Observable<any[]>;
  filteredDistricts!: Observable<any[]>;

  constructor(
    private commonService: CommonService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.stateList = this.commonService.getStateList();

    this.filteredFinancialYr = this.financialYrCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.financialYr, value ?? ''))
    );

    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterState(value ?? ''))
    );

    this.filteredDistricts = combineLatest([
      this.districtCtrl.valueChanges.pipe(startWith('')),
      this.districtList$
    ]).pipe(
      map(([search, list]) => {
        const filterValue = (search || '').toLowerCase();
        return list.filter(dist =>
          dist.districtNameEnglish.toLowerCase().includes(filterValue)
        );
      })
    );
    
  }

  private _filter(options: string[], value: string): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterState(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.stateList.filter(state =>
      state.state_name_english.toLowerCase().includes(filterValue)
    );
  }

  private _filterDistrict(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.districtList.filter(dist =>
      dist.districtNameEnglish.toLowerCase().includes(filterValue)
    );
  }

  onFinancialYearSelected(event: any): void {
    this.selectedFincialYr = event.option.value;
  }

  onStateSelected(event: any): void {
    const selectedCode = event.option.value;
    const selectedState = this.stateList.find(state => state.state_code === selectedCode);
    this.selectedStateCode = selectedCode;
    this.stateCtrl.setValue(selectedState?.state_name_english || '');
    this.onStateChange(selectedCode);
  }

  onDistrictSelected(event: any): void {
    const selectedCode = event.option.value;
    const selectedDistrict = this.districtList.find(dist => dist.districtCode === selectedCode);
    this.selectedDistrictCode = selectedCode;
    this.districtCtrl.setValue(selectedDistrict?.districtNameEnglish || '');
  }

  onStateChange(stateCode: number | null): void {
    if (stateCode === null) {
      this.districtList = [];
      this.districtList$.next([]);
      this.selectedDistrictCode = null;
      return;
    }
  
    this.selectedStateCode = stateCode;
    this.districtList = this.commonService.getDistrictList(stateCode);
    this.districtList$.next(this.districtList);
  }
  

  clearState(): void {
    this.selectedStateCode = null;
    this.stateCtrl.setValue('');
    this.districtList = [];
    this.districtCtrl.setValue('');
    this.selectedDistrictCode = null;
  }

  clearDistrict(): void {
    this.selectedDistrictCode = null;
    this.districtCtrl.setValue('');
  }

  applyFilter(): void {
    const selectedFilters = {
      financialYear: this.selectedFincialYr,
      stateCode: this.selectedStateCode,
      districtCode: this.selectedDistrictCode
    };
    this.dataEmitter.emit(selectedFilters);
    this.sharedService.updateDataFilter(selectedFilters);
  }



}
