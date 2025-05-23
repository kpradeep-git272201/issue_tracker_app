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
import { CommonService } from '../../../../services/planning/common.service'; 
import { SharedService } from '../../../../services/filter/shared.service'; 
import { FinyearService } from '../../../../services/json/financialYear/finyear.service'; 
import { StateService } from '../../../../services/json/stateList/state.service'; 
import { ZpListService } from '../../../../services/json/zp/zp-list.service'; 
import { BpListService } from '../../../../services/json/bp/bp-list.service'; 
import { GpListService } from '../../../../services/json/gp/gp-list.service'; 
import { CustomSelectComponent } from '../custom-select/custom-select.component';

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
    MatButtonModule,
    CustomSelectComponent
  ],
  templateUrl: './geographical-filter.component.html',
  styleUrl: './geographical-filter.component.scss'
})
export class GeographicalFilterComponent implements OnInit {
  @Output() dataEmitter = new EventEmitter<any>();
  @Input() opened: boolean = false;

  financialYr: any[] = [];

  stateList: any[] = [];
  districtList: any[] = [];
  private districtList$ = new BehaviorSubject<any[]>([]);

  blockList: any[] = [];
  private blockList$ = new BehaviorSubject<any[]>([]);
  filteredBlocks!: Observable<any[]>;

  gpList: any[] = [];
  private gpList$ = new BehaviorSubject<any[]>([]);
  filteredGps!: Observable<any[]>;


  selectedFincialYr = '';
  selectedStateCode: number | null = null;
  selectedDistrictCode: number | null = null;
  selectedBlock: number | null = null;
  selectedGp: number | null = null;

  financialYrCtrl = new FormControl('');
  stateCtrl = new FormControl('');
  districtCtrl = new FormControl('');
  blockCtrl = new FormControl('');
  gpCtrl = new FormControl('');

  filteredFinancialYr!: Observable<string[]>;
  filteredStates!: Observable<any[]>;
  filteredDistricts!: Observable<any[]>;

  constructor(
    private commonService: CommonService,
    private sharedService: SharedService,
    private finYrService: FinyearService,
    private stateService: StateService,
    private zpListServive: ZpListService,
    private bpListService: BpListService,
    private gpListService: GpListService
  ) { }

  ngOnInit(): void {
    this.stateList = this.stateService.getStateList();
    this.financialYr = this.finYrService.getFinYr();
    
    this.selectedFincialYr = this.financialYr[0];
    this.financialYrCtrl.setValue(this.selectedFincialYr);

    // this.filteredFinancialYr = this.financialYrCtrl.valueChanges.pipe(
    //   startWith(this.selectedFincialYr),
    //   map(value => this._filter(this.financialYr, value ?? ''))
    // );

    // this.filteredStates = this.stateCtrl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filterState(value ?? ''))
    // );

    // this.filteredDistricts = combineLatest([
    //   this.districtCtrl.valueChanges.pipe(startWith('')),
    //   this.districtList$
    // ]).pipe(
    //   map(([search, list]) => {
    //     const filterValue = typeof search === 'string' ? search.toLowerCase() : '';
    //     return list.filter(dist =>
    //       dist.value.toLowerCase().includes(filterValue)
    //     );
    //   })
    // );

    // this.filteredBlocks = combineLatest([
    //   this.blockCtrl.valueChanges.pipe(startWith('')),
    //   this.blockList$
    // ]).pipe(
    //   map(([search, list]) => {
    //     const filterValue = typeof search === 'string' ? search.toLowerCase() : '';
    //     return list.filter(block => block.value.toLowerCase().includes(filterValue));
    //   })
    // );


    // this.filteredGps = combineLatest([
    //   this.gpCtrl.valueChanges.pipe(startWith('')),
    //   this.gpList$
    // ]).pipe(
    //   map(([search, list]) => {
    //     const filterValue = typeof search === 'string' ? search.toLowerCase() : '';
    //     return list.filter(gp => gp.value.toLowerCase().includes(filterValue));
    //   })
    // );

  }


  // private _filter(options: string[], value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return options.filter(option => option.toLowerCase().includes(filterValue));
  // }

  // private _filterState(value: any): any[] {
  //     const filterValue = value.toLowerCase();
  //   return this.stateList.filter(state =>
  //     state.value.toLowerCase().includes(filterValue)
  //   );
  // }

  onFinancialYearSelected(event: any): void {
    this.selectedFincialYr = event.option.value;
  }

  onStateSelected(event: any): void {
    debugger
    const selectedCode = event.option.value;
    const selectedState = this.stateList.find(state => state.code === selectedCode);
    this.selectedStateCode = selectedCode;
    this.stateCtrl.setValue(selectedState?.value || '');
    this.onStateChange(selectedCode);
  }

  onDistrictSelected(event: any): void {
    const selectedDistrict = event.option.value;
    this.selectedDistrictCode = selectedDistrict.code;
    this.districtCtrl.setValue(selectedDistrict);

    const zpCode = selectedDistrict.code;
    const bpListData = this.bpListService.getBpList();
    const matchedDistrict = bpListData.find((item: any) => item.zpCode === zpCode);
    const matchedBpList = matchedDistrict ? matchedDistrict.bpList : [];
    this.blockList = matchedBpList;
    this.blockList$.next(matchedBpList);

    // Clear block and GP fields when district changes
    this.selectedBlock = null;
    this.blockCtrl.setValue('');
    this.gpCtrl.setValue('');
  }


  onBlockSelected(event: any): void {
    const selectedBlock = event.option.value;
    this.selectedBlock = selectedBlock.code;
    this.blockCtrl.setValue(selectedBlock);
    const blockCode = selectedBlock.code;
    const gpListData = this.gpListService.getGpList();
    const matchedBlock = gpListData.find((item: any) => item.bpCode == blockCode);
    const matchedGpList = matchedBlock ? matchedBlock.gpList : [];
    this.gpList = matchedGpList;
    this.gpList$.next(matchedGpList);

    this.gpCtrl.setValue('');

  }

  onGpSelected(event: any): void {
    const selectedGp = event.option.value;
    this.selectedGp = selectedGp.code;
    this.gpCtrl.setValue(selectedGp);
  }
  

  onStateChange(stateCode: number | null): void {
    if (stateCode === null) {
      this.districtList = [];
      this.districtList$.next([]);
      this.selectedDistrictCode = null;
      this.selectedBlock = null;
      this.blockList = [];
      this.blockList$.next([]);
      this.districtCtrl.setValue('');
      this.blockCtrl.setValue('');
      this.gpCtrl.setValue('');
      return;
    }

    this.selectedStateCode = stateCode;
    const zpData = this.zpListServive.getZpList();
    const matchedState = zpData.find(entry => entry.stateCode === stateCode);
    this.districtCtrl.setValue('');
    this.districtList = matchedState?.zpList || [];
    this.districtList$.next(this.districtList);

    // Clear block and GP fields when state changes
    this.selectedDistrictCode = null;
    this.selectedBlock = null;
    this.blockCtrl.setValue('');
    this.gpCtrl.setValue('');
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
  clearBlock(): void {
    this.selectedBlock = null;
    this.blockCtrl.setValue('');
    this.gpCtrl.setValue('');
  }

  clearGP(): void {
    this.gpCtrl.setValue('');
  }

  applyFilter(): void {
    debugger
    const selectedFilters = {
      financialYear: this.selectedFincialYr,
      stateCode: this.selectedStateCode,
      districtCode: this.selectedDistrictCode,
      blockCode: this.selectedBlock,
      gpCode: this.selectedGp
    };
    this.dataEmitter.emit(selectedFilters);
    this.sharedService.updateDataFilter(selectedFilters);
  }

  displayDistrictFn(district: any): string {
    return district && district.value ? district.value : '';
  }
  displayBlockFn(block: any): string {
    return block && block.value ? block.value : '';
  }
  displayGpFn(gp: any): string {
    return gp && gp.value ? gp.value : '';
  }

}
