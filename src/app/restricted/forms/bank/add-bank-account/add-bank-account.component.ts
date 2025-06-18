

import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { AccountingService } from '../../../../services/restricted/accounting/accounting.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-bank-account',
  imports: [MaterialModule],
  templateUrl: './add-bank-account.component.html',
  styleUrl: './add-bank-account.component.scss'
})
export class AddBankAccountComponent {
  form: FormGroup;
  bankList: any = [];
  branchList: any = []; 

  constructor(
    private accountingService: AccountingService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      bankCode: [''],
      branchCode: [''],
      accountNo: ['']
    });
  }

  ngOnInit() {
    this.accountingService.customGet('master/bankAccount/bankListForAddAccount')
      .subscribe(response => {
        this.bankList = response.body;
      });
  }

  onBankChange(bankCode: number) {
    if (bankCode) {
      this.accountingService.customGet(`master/bankAccount/branchListForAddAccount/${bankCode}`)
        .subscribe(response => {
          this.branchList = response.body;
        });
    } else {
      this.branchList = [];
      this.form.get('branchCode')?.reset();
    }
  }

  onClear() {
    this.form.reset();
    this.branchList = [];
  }

  onClose() {

  }

  onSave() {
    console.log(this.form.value);
  }
}
