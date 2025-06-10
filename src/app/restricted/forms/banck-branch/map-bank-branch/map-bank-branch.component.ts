import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountingService } from '../../../../services/restricted/accounting/accounting.service';

@Component({
  selector: 'app-map-bank-branch',
  imports: [MaterialModule],
  templateUrl: './map-bank-branch.component.html',
  styleUrl: './map-bank-branch.component.scss',
})
export class MapBankBranchComponent {
  form: FormGroup;
  bankList: any = [];
  districtPanchayats: any = [];

  AvailableBranchListMapp: any = [];
  rightBranchList: any[] = [];
  selectedIds = new Set<number>();
  AllCheckedAvailableBnch: boolean = false;
  AllCheckedMapBnch: boolean = false;
  searchTextAvailBnch: any = '';
  searchTextMapBnch: any = '';
  AvailableBranchListMappClone: any=[];
  rightBranchListClone: any=[];
  constructor(
    private fb: FormBuilder,
    private accountingService: AccountingService,
  ) {
    this.form = this.fb.group({
      bankName: [''],
      districtPanchayat: [''],
    });
  }

  ngOnInit() {
    this.getBankList();
  }
  onSave() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
      console.log(this.rightBranchList);
    }
  }

  onClear() {
    this.form.reset();
    this.AvailableBranchListMapp = [];
    this.rightBranchList = [];
    this.selectedIds.clear();
  }

  onClose() {}

  getBankList() {
    this.bankList = this.accountingService.getBankList();
  }

  getPanchyatByBankList(bankCode: any) {
    this.districtPanchayats = this.accountingService
      .getPanchyatByBankList()
      .filter((item) => {
        return item.bankCode == bankCode;
      });
    this.districtPanchayats = this.districtPanchayats[0]?.data;
  }

  onBankSelect(event: any) {
    this.getPanchyatByBankList(event.value.bankCode);
  }

  onDistrictSelect(event: any) {
    const zpCode = event.value?.entityCode;
    this.AvailableBranchListMapp = this.accountingService
      .getBranchByZpCode()
      .filter((item) => {
        return item.zpCode == zpCode;
      });
    this.AvailableBranchListMapp = this.AvailableBranchListMapp[0]?.branches;
    this.AvailableBranchListMappClone = JSON.parse(
      JSON.stringify(this.AvailableBranchListMapp),
    );
  }

  moveRight() {
    const toMove = this.AvailableBranchListMapp.filter(
      (b: { branchId: number }) => this.selectedIds.has(b.branchId),
    );

    this.rightBranchList = this.sortByBranchName([
      ...this.rightBranchList,
      ...toMove,
    ]);
    this.AvailableBranchListMapp = this.sortByBranchName(
      this.AvailableBranchListMapp.filter(
        (b: { branchId: number }) => !this.selectedIds.has(b.branchId),
      ),
    );

    toMove.forEach((b: { branchId: number }) =>
      this.selectedIds.delete(b.branchId),
    );
    this.rightBranchListClone = JSON.parse(
      JSON.stringify(this.rightBranchList),
    );
  }

  moveLeft() {
    const toMove = this.rightBranchList.filter((b) =>
      this.selectedIds.has(b.branchId),
    );
    this.AvailableBranchListMapp = this.sortByBranchName([
      ...this.AvailableBranchListMapp,
      ...toMove,
    ]);
    this.rightBranchList = this.sortByBranchName(
      this.rightBranchList.filter((b) => !this.selectedIds.has(b.branchId)),
    );
    toMove.forEach((b) => this.selectedIds.delete(b.branchId));
  }

  sortByBranchName(list: any[]) {
    return list.sort((a, b) => a.branchName.localeCompare(b.branchName));
  }

  toggleSelection(branchId: number, action: string) {
    this.selectedIds.has(branchId)
      ? this.selectedIds.delete(branchId)
      : this.selectedIds.add(branchId);

    if (action == 'availableBranch') {
      const branchListSize = this.AvailableBranchListMapp.length;
      this.AllCheckedAvailableBnch =
        this.selectedIds.size == branchListSize ? true : false;
    } else {
      const branchListSize = this.rightBranchList.length;
      this.AllCheckedMapBnch =
        this.selectedIds.size == branchListSize ? true : false;
    }
  }

  selecteAllAvalBnch(event: any) {
    this.selectedIds.clear();
    if (event.checked)
      this.AvailableBranchListMapp.forEach((element: any) => {
        this.selectedIds.add(element.branchId);
      });
  }

  selecteAllMapBnch(event: any) {
    this.selectedIds.clear();
    if (event.checked)
      this.rightBranchList.forEach((element: any) => {
        this.selectedIds.add(element.branchId);
      });
  }

  getFilterAvailBnch() {
    const searchText = this.searchTextAvailBnch.toLowerCase();
    this.AvailableBranchListMapp = this.AvailableBranchListMappClone.filter(
      (branch: any) => {
        return branch.branchName.toLowerCase().includes(searchText);
      },
    );
  }

  getFilterMapBnch() {
    const searchText = this.searchTextMapBnch.toLowerCase();
    this.rightBranchList = this.rightBranchListClone.filter((branch: any) => {
      return branch.branchName.toLowerCase().includes(searchText);
    });
  }
}
