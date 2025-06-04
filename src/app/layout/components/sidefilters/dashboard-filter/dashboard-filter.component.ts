
import { Component, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { CustomSelectComponent } from "../custom-select/custom-select.component";
import { EventEmitter } from 'stream';

import { FinyearService } from '../../../../services/json/financialYear/finyear.service';
import { StateService } from '../../../../services/json/stateList/state.service';
import { ZpListService } from '../../../../services/json/zp/zp-list.service';
import { BpListService } from '../../../../services/json/bp/bp-list.service';
import { GpListService } from '../../../../services/json/gp/gp-list.service';
import { SharedService } from '../../../../services/filter/shared.service';
import { SchemelistService } from '../../../../services/json/scheme/schemelist.service';
import { ThemelistService } from '../../../../services/json/theme/themelist.service';
import { FocusareaListService } from '../../../../services/json/focusarea/focusarea-list.service';
import { MovableListService } from '../../../../services/json/movable/movable-list.service';
import { ActivityListService } from '../../../../services/json/activity/activity-list.service';


interface Scheme {
  code: number;
  value: string;
  checked?: boolean;
}

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
  //  @Output() dataEmitter = new EventEmitter<any>();
  financialYr: any[] = [];
  stateList: any[] = [];
  districtList: any[] = [];
  blockList: any[] = [];
  gpList: any[] = [];
  schemeList: any = [];
  schemeComponentList: any = [];
  themeList: any = [];
  focusAreaList: any = [];
  movableList: any = [];
  activityList: any = [];

  selectedFinancialYear: any = null;
  selectedState: any = null;
  selectedDistrict: any = null;
  selectedBlock: any = null;
  selectedGp: any = null;
  selectedScheme: any = null;
  selectedSchemeComponent: any = null;
  selectedThemeList: any = null;
  selectedExpeditureType: string = '1';
  selectedFocusArea: any = null;
  selectMovable: any = null;
  selectedActivity: any = null;

  constructor(private finYrService: FinyearService,
    private stateService: StateService,
    private zpListServive: ZpListService,
    private bpListService: BpListService,
    private gpListService: GpListService,
    private sharedService: SharedService,
    private schemeListService: SchemelistService,
    private themelistService: ThemelistService,
    private focusAreaService: FocusareaListService,
    private movableService: MovableListService,
    private activityService: ActivityListService
  ) { }

  ngOnInit(): void {
    // finyr
    this.financialYr = [
      { code: '0', name: 'All Financial Year' },
      ...this.finYrService.getFinYr()
    ];
    this.selectedFinancialYear = this.finYrService.getFinYr()[0];

    // stateList
    const allStates = { code: 0, value: 'All States' };
    const otherStates = this.stateService.getStateList();
    this.stateList = [
      allStates,
      ...otherStates.sort((a, b) => a.value.localeCompare(b.value))
    ];
    this.selectedState = this.stateList[0];
    this.onStateSelected(this.selectedState);
    this.getSchemeComponentsBySchemeCodes();
    this.getThemeList();
    this.getFocusArea();
    this.getActivity()
    this.getMovableList();

  }
  onFinYrSelected(event: any): void {
    if (event) {
      this.selectedFinancialYear = event
    }
    this.getThemeList()
  }
  onStateSelected(event: any): void {
    this.selectedState = event || null;
    this.selectedDistrict = null;
    this.selectedBlock = null;
    this.selectedGp = null;
    this.blockList = [];
    this.gpList = [];
    this.schemeList = [];

    if (!event) {
      this.districtList = [];
      return;
    }

    const zpData = this.zpListServive.getZpList();
    const matchedState = zpData.find(entry => entry.stateCode === event.code);

    this.districtList = matchedState
      ? [
        { code: 0, value: 'All Districts' },
        ...matchedState.zpList.sort((a, b) => a.value.localeCompare(b.value))
      ]
      : [];


    this.schemeList = this.getAllSchemes(event.code);
    this.getSchemeComponentsBySchemeCodes()
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
        ? [
            { code: 0, value: 'All Blocks' },
            ...matchedDistrict.bpList.sort((a, b) => a.value.localeCompare(b.value))
          ]
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
      ? [{ code: 0, value: 'All GPs' }, ...matchedBlock.gpList]
      : [];
      
  }

  onGpSelected(event: any): void {
    this.selectedGp = event || null;
  }


  applyFilter(): void {
    debugger
    const selectedFilters = {
      financialYear: this?.selectedFinancialYear?.code ?? 0,
      stateCode: this?.selectedState?.code ?? 0,
      districtCode: this?.selectedDistrict?.code ?? 0,
      blockCode: this?.selectedBlock?.code ?? 0,
      gpCode: this?.selectedGp?.code ?? 0,
      schemes: [] as any[],
      schemeComponents: [] as any[],
      themes: [] as any[],
      focusAreas: [] as any[],
      movables: [] as any[],
      activities: [] as any[],
      expenditureType: this.selectedExpeditureType,
    };

    this.schemeList.forEach((group: { filterData: any[] }) => {
      const selectedSchemesInGroup = group.filterData.filter(scheme => scheme.checked);
      selectedFilters.schemes.push(...selectedSchemesInGroup);
    });

    if (this.schemeComponentList?.length > 0) {
      this.schemeComponentList.forEach((group: { filterData: any[] }) => {
        const selectedComponents = group.filterData.filter(component => component.checked);
        selectedFilters.schemeComponents.push(...selectedComponents);
      });
    }

    if (this.themeList?.length > 0) {
      this.themeList.forEach((group: { filterData: any[] }) => {
        const selectedThemes = group.filterData.filter(theme => theme.checked);
        selectedFilters.themes.push(...selectedThemes);
      });
    }

    if (this.focusAreaList?.length > 0) {
      this.focusAreaList.forEach((group: { filterData: any[] }) => {
        const selectedFocusAreas = group.filterData.filter(area => area.checked);
        selectedFilters.focusAreas.push(...selectedFocusAreas);
      });
    }

    if (this.movableList?.length > 0) {
      this.movableList.forEach((group: { filterData: any[] }) => {
        const selectedMovables = group.filterData.filter(movable => movable.checked);
        selectedFilters.movables.push(...selectedMovables);
      });
    }

    if (this.activityList?.length > 0) {
      this.activityList.forEach((group: { filterData: any[] }) => {
        const selectedActivities = group.filterData.filter(activity => activity.checked);
        selectedFilters.activities.push(...selectedActivities);
      });
    }

    console.log('Selected Filters:', selectedFilters);
    this.sharedService.updateDataFilter(selectedFilters);
  }



  getAllSchemes(stateCode: number): { filtervalue: string, filterData: Scheme[] }[] {
    const schemeListObj = this.schemeListService.getSchemeList();
    const schemeData = (schemeListObj?.filterData || []) as any[];
    const filtervalue = schemeListObj?.filtervalue || 'All Schemes';
    let result: { filtervalue: string, filterData: Scheme[] }[] = [];
    if (!schemeData.length) {
      return [];
    }
    if (stateCode === 0) {
      const combinedSchemes: Scheme[] = schemeData
        .flatMap(item => item.schemeList || [])
        .map((scheme: any) => ({ ...scheme, checked: true }))
        .sort((a, b) => a.value.localeCompare(b.value)); 
  
      if (combinedSchemes.length > 0) {
        result = [{
          filtervalue,
          filterData: combinedSchemes
        }];
      }
    } else {
      const matched = schemeData.find(entry => entry.stateCode === stateCode);
      if (matched && matched.schemeList && matched.schemeList.length > 0) {
        const schemesWithChecked = (matched.schemeList as any[])
          .map((scheme: any) => ({ ...scheme, checked: true }))
          .sort((a, b) => a.value.localeCompare(b.value)); 
  
        result = [{
          filtervalue,
          filterData: schemesWithChecked
        }];
      }
    }
    return result;
  }
  

  getSchemeComponentsBySchemeCodes() {
    const selectedSchemeCodes: any[] = [];
    this.schemeList.forEach((group: { filterData: any[] }) => {
      const selectedSchemes = group.filterData.filter(scheme => scheme.checked);
      selectedSchemeCodes.push(...selectedSchemes.map(s => s.code));
    });
  
    const schemeComponentData = this.schemeListService.getSchemeComponentList();
    const componentFilterData: any[] = [];
  
    schemeComponentData.filterData.forEach(componentGroup => {
      if (selectedSchemeCodes.includes(componentGroup.schemeCode)) {
        componentGroup.schemeComponentList.forEach(comp => {
          componentFilterData.push({
            ...comp,
            checked: true
          });
        });
      }
    });
    componentFilterData.sort((a, b) => a.value.localeCompare(b.value));
    this.schemeComponentList = [
      {
        filtervalue: schemeComponentData.filtervalue,
        filterData: componentFilterData
      }
    ];
  }
  

  getThemeList() {
    const allTheme = this.themelistService.getThemeList();
    const yearCode = this.selectedFinancialYear?.code;
    const endYear = yearCode && yearCode !== '0' ? parseInt(yearCode.split('-')[1], 10) : null;
    // If yearCode is '0' OR endYear >= 2023, show themes
    if (yearCode === '0' || (endYear !== null && endYear >= 2023)) {
      allTheme.filterData.forEach(theme => {
        (theme as any).checked = true;
      });
      this.themeList = [{
        filtervalue: allTheme.filterName,
        filterData: allTheme.filterData
      }];
    } else {
      this.themeList = [];
    }
  }

  getFocusArea() {
    const allFocusArea = this.focusAreaService.getFocusAreaList();
  
    if (allFocusArea.filterData.length > 0) {
      allFocusArea.filterData.forEach(area => {
        (area as any).checked = true;
      });
      const sortedFocusAreas = allFocusArea.filterData.sort((a, b) =>
        a.value.localeCompare(b.value)
      );
  
      this.focusAreaList = [{
        filtervalue: allFocusArea.filterName,
        filterData: sortedFocusAreas
      }];
    } else {
      this.focusAreaList = [];
    }
  }
  

  getMovableList() {
    const allMovable = this.movableService.getMovableAndImmovable();

    if (allMovable.filterData.length > 0) {
      // allMovable.filterData.forEach(movable =>{
      //   (movable as any).checked = true;
      // })
      this.selectMovable = allMovable.filterData[0];
      this.movableList = [{
        filtervalue: allMovable.filterName,
        filterData: allMovable.filterData
      }]
    } else {
      this.movableList = []
    }
  }

  getActivity() {
    const allActivity = this.activityService.getActivityList();
    if (allActivity.filterData.length > 0) {
      allActivity.filterData.forEach(activity => {
        (activity as any).checked = true;
      });
      const sortedActivities = allActivity.filterData.sort((a, b) =>
        a.value.localeCompare(b.value)
      );
  
      this.activityList = [{
        filtervalue: allActivity.filterName,
        filterData: sortedActivities
      }];
    } else {
      this.activityList = [];
    }
  }
  

}