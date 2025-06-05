import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountingService } from '../../../../services/restricted/accounting/accounting.service';
import { MatChipGrid } from '@angular/material/chips';

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

  constructor(
    private fb: FormBuilder,
    private accountingService: AccountingService,
  ) {
    this.form = this.fb.group({
      bankName: [''],
      districtPanchayat: [''],
    });
  }

  ngOnInit(){
    this.getBankList();
  }
  onSave() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
    }
  }

  onClear() {
    this.form.reset();
  }

  onClose() {}

  getBankList() {
    this.bankList = this.accountingService.getBankList();
  }

  getPanchyatByBankList(bankCode:any) {
    this.districtPanchayats=this.accountingService.getPanchyatByBankList().filter((item)=>{
      return item.bankCode==bankCode;
  })
  this.districtPanchayats=this.districtPanchayats[0]?.data;
  }

  onBankSelect(event:any){
    this.getPanchyatByBankList(event.value.bankCode);
  }

  onDistrictSelect(event:any){

  }

}
