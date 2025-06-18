import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountingService } from '../../../../services/restricted/accounting/accounting.service';
import { LocalService } from '../../../../services/localStorage/local.service';
import { isPlatformBrowser } from '@angular/common';
import { subscribe } from 'diagnostics_channel';
import { TostService } from '../../../../shared/message/tost.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../../../shared/message/success/snackbar/snackbar.component';

@Component({
  selector: 'app-map-bank-branch',
  imports: [MaterialModule],
  templateUrl: './map-bank-branch.component.html',
  styleUrl: './map-bank-branch.component.scss',
})
export class MapBankBranchComponent implements OnInit {
  form: FormGroup;
  bankList: any = [];
  districtPanchayats: any = [];

  AvailableBranchListMapp: any = [];
  rightBranchList: any[] = [];
  selectedIds = new Set<number>();

  selectedForMapIds = new Set<number>();
  selectedForUnMapIds = new Set<number>();

  AllCheckedAvailableBnch: boolean = false;
  AllCheckedMapBnch: boolean = false;
  searchTextAvailBnch: any = '';
  searchTextMapBnch: any = '';
  AvailableBranchListMappClone: any = [];
  rightBranchListClone: any = [];
  userData: any;
  stateCode: any;
  bankCode: any;
  zpCode: any;
  mappedBranch: any;
  unMappedBranch: any;
  constructor(
    private fb: FormBuilder,
    private accountingService: AccountingService,
    private localService: LocalService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private tostService: TostService,
    private snackBar: MatSnackBar,
  ) {
    this.form = this.fb.group({
      bankName: [''],
      districtPanchayat: [''],
    });
  }

  ngOnInit() {
    if (this.isBrowser()) {
      this.accountingService.selectedForMapIds$.subscribe(
        (selectedForMapIds) => {
          this.mappedBranch = selectedForMapIds;
        },
      );
      this.accountingService.selectedForUnMapIds$.subscribe(
        (selectedForUnMapIds) => {
          this.unMappedBranch = selectedForUnMapIds;
        },
      );
      this.userData = this.localService.getUserData();
      this.stateCode = this.userData.stateCode;
      this.getBankList();
    }
  }

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
  onSave() {
    if (this.form.valid) {
      const data = {
        mappedBranch: this.mappedBranch,
        unMappedBranch: this.unMappedBranch,
      };
      this.accountingService
        .saveBranchMappingUnMapping(data)
        .subscribe((resp: any) => {
          if (resp?.status == 200) {
            this.getSuucessMessage(resp.body)
          } else {
            this.showMessage(resp.body, 'error');
          }
        });
    }
  }

  onClear() {
    this.form.reset();
    this.AvailableBranchListMapp = [];
    this.rightBranchList = [];
    this.AvailableBranchListMappClone = [];
    this.rightBranchListClone = [];
    this.AllCheckedAvailableBnch = false;
    this.AllCheckedMapBnch = false;
    this.selectedIds.clear();
  }

  onClose() {}

  getSuucessMessage(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: {
        message: message,
        onContinue: () => {
          this.onClear()
        },
      },
      duration: undefined,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['no-auto-dismiss'],
    });
  }
  getBankList() {
    this.accountingService.getBankListByStateCode(this.stateCode).subscribe(
      (resp: any) => {
        if (resp?.status == 200) {
          this.bankList = resp.body;
        } else {
        }
      },
      (error: any) => {
        console.log('Login error', error);
      },
    );
  }

  getPanchyatByBankList(bankCode: any) {
    this.bankCode = bankCode;
    this.accountingService
      .getDistricPanchByBank(this.stateCode, bankCode)
      .subscribe(
        (resp: any) => {
          if (resp?.status == 200) {
            this.districtPanchayats = resp.body;
          } else {
          }
        },
        (error: any) => {
          console.log('Login error', error);
        },
      );
  }

  onBankSelect(event: any) {
    this.resetVaribale();
    this.getPanchyatByBankList(event.value.bankCode);
  }

  onDistrictSelect(event: any) {
    this.resetVaribale();
    const zpCode = event.value?.entityCode;
    this.zpCode = zpCode;
    this.getUnMappedBranch(zpCode);
    this.getMappedBranch(zpCode);
  }

  getUnMappedBranch(zpCode: any) {
    this.AvailableBranchListMapp = [];
    this.AvailableBranchListMappClone = [];
    this.accountingService
      .getUnMappedBranch(this.stateCode, this.bankCode, zpCode)
      .subscribe(
        (resp: any) => {
          if (resp?.status == 200) {
            this.AvailableBranchListMapp = resp.body;
            this.AvailableBranchListMappClone = JSON.parse(
              JSON.stringify(resp.body),
            );
          } else {
          }
        },
        (error: any) => {
          console.log('Login error', error);
        },
      );
  }

  getMappedBranch(zpCode: any) {
    this.rightBranchList = [];
    this.rightBranchListClone = [];
    this.accountingService
      .getMappedBranch(this.stateCode, this.bankCode, zpCode)
      .subscribe(
        (resp: any) => {
          if (resp?.status == 200) {
            resp.body.forEach((branch: any) => {
              branch.isMapped = true;
            });
            this.rightBranchList = resp.body;
            this.rightBranchListClone = JSON.parse(JSON.stringify(resp.body));
          } else {
          }
        },
        (error: any) => {
          console.log('Login error', error);
        },
      );
  }

  moveRight() {
    this.accountingService.SetSelectedForMapIds(
      Array.from(this.selectedForMapIds),
    );
    this.accountingService.setSelectedForUnMapIds(
      Array.from(this.selectedForUnMapIds),
    );
    this.AllCheckedAvailableBnch = false;
    this.AllCheckedMapBnch = false;
    const toMove = this.AvailableBranchListMapp.filter(
      (b: { branchCode: number }) => this.selectedIds.has(b.branchCode),
    );

    this.rightBranchList = this.sortByBranchName([
      ...this.rightBranchList,
      ...toMove,
    ]);
    this.AvailableBranchListMapp = this.sortByBranchName(
      this.AvailableBranchListMapp.filter(
        (b: { branchCode: number }) => !this.selectedIds.has(b.branchCode),
      ),
    );

    toMove.forEach((b: { branchCode: number }) =>
      this.selectedIds.delete(b.branchCode),
    );
    this.rightBranchListClone = JSON.parse(
      JSON.stringify(this.rightBranchList),
    );
  }

  moveLeft() {
    this.accountingService.SetSelectedForMapIds(
      Array.from(this.selectedForMapIds),
    );
    this.accountingService.setSelectedForUnMapIds(
      Array.from(this.selectedForUnMapIds),
    );
    this.AllCheckedAvailableBnch = false;
    this.AllCheckedMapBnch = false;
    const toMove = this.rightBranchList.filter((b) =>
      this.selectedIds.has(b.branchCode),
    );
    this.AvailableBranchListMapp = this.sortByBranchName([
      ...this.AvailableBranchListMapp,
      ...toMove,
    ]);
    this.rightBranchList = this.sortByBranchName(
      this.rightBranchList.filter((b) => !this.selectedIds.has(b.branchCode)),
    );
    toMove.forEach((b) => this.selectedIds.delete(b.branchCode));
  }

  sortByBranchName(list: any[]) {
    return list.sort((a, b) => a.branchName.localeCompare(b.branchName));
  }

  toggleSelection(branch: any, branchCode: number, action: string) {
    this.selectedIds.has(branchCode)
      ? this.selectedIds.delete(branchCode)
      : this.selectedIds.add(branchCode);

    if (action == 'availableBranch') {
      if (this.selectedForMapIds.has(branchCode)) {
        this.selectedForMapIds.delete(branchCode);
      } else {
        this.selectedForMapIds.add(branchCode);
        this.selectedForUnMapIds.delete(branchCode);
      }
      const branchListSize = this.AvailableBranchListMapp.length;
      this.AllCheckedAvailableBnch =
        this.selectedIds.size == branchListSize ? true : false;
    } else {
      if (this.selectedForUnMapIds.has(branchCode)) {
        this.selectedForUnMapIds.delete(branchCode);
      } else {
        if (branch?.isMapped) this.selectedForUnMapIds.add(branchCode);
        this.selectedForMapIds.delete(branchCode);
      }
      const branchListSize = this.rightBranchList.length;
      this.AllCheckedMapBnch =
        this.selectedIds.size == branchListSize ? true : false;
    }
  }

  selecteAllAvalBnch(event: any) {
    this.selectedIds.clear();
    this.AllCheckedMapBnch = false;
    if (event.checked)
      this.AvailableBranchListMapp.forEach((element: any) => {
        this.selectedIds.add(element.branchCode);
      });
  }

  selecteAllMapBnch(event: any) {
    this.selectedIds.clear();
    this.AllCheckedAvailableBnch = false;
    if (event.checked)
      this.rightBranchList.forEach((element: any) => {
        this.selectedIds.add(element.branchCode);
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

  resetVaribale() {
    this.rightBranchList = [];
    this.rightBranchListClone = [];
    this.AvailableBranchListMapp = [];
    this.AvailableBranchListMappClone = [];
    this.selectedIds.clear();
    this.selectedForMapIds.clear();
    this.selectedForUnMapIds.clear();
    this.AllCheckedAvailableBnch = false;
    this.AllCheckedMapBnch = false;
    this.zpCode = '';
  }

  showMessage(message: any, type: string) {
    this.tostService.showMessage(message, 3000, type);
  }
}
