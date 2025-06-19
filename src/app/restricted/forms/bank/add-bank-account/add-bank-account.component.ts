

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
  schemeList : any = [];
  centralSchemes: any[] = [];
  ownResources: any[] = [];
  schemeComponentsMap: { [key: number]: any[] } = {};

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
    // bank list
    this.accountingService.customGet('master/bankAccount/bankListForAddAccount')
      .subscribe(response => {
       if(response.body.length > 0){
         this.bankList = response.body;
       }
      });
    //Scheme list
    this.accountingService.customGet('master/bankAccount/schemeListForAddAccount')
      .subscribe(response => {
        if(response.body.length > 0){
          this.schemeList = response.body
          this.centralSchemes = this.schemeList.filter((s: { schemeCategory: any; }) => s.schemeCategory === 'C');
          this.ownResources = this.schemeList.filter((s: { schemeCategory: any; }) => s.schemeCategory === null);
        }
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


onSchemeCheck(event: any, scheme: any) {
  if (event.target.checked) {
    console.log('Checked scheme:', scheme);

    this.accountingService.customGet(`master/bankAccount/schemeComponentListForAddAccount/${scheme.schemeId}`)
      .subscribe(response => {
        console.log('Scheme component list:', response.body);
        this.schemeComponentsMap[scheme.schemeId] = response.body;
      });
  } else {
    console.log('Unchecked scheme:', scheme);
    delete this.schemeComponentsMap[scheme.schemeId];
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
