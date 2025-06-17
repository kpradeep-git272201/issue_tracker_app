import { Component, computed } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { ManageComponent } from '../../../components/manage/manage.component';
import { AccountingService } from '../../../../services/restricted/accounting/accounting.service';

@Component({
  selector: 'app-modify-benificary',
  imports: [MaterialModule, ManageComponent],
  templateUrl: './modify-benificary.component.html',
  styleUrl: './modify-benificary.component.scss',
})
export class ModifyBenificaryComponent {
  globalFilter = '';
  currentPage = 1;
  pageSize = 10;

  columns = [{ attrId: 'agencyDesc', attrName: 'Label.AgencyDetails' }];
  data: any = [];

  constructor(private accountingService: AccountingService) {}

  ngOnInit() {
    this.getVendorBeneficiaryManage();
  }

  getVendorBeneficiaryManage() {
    this.accountingService.getVendorBeneficiaryManage().subscribe((resp) => {
      if (resp?.status == 200) {
        this.data = [];
        this.createColumnName(resp.body);
        resp.body.forEach((elememt: any) => {
          this.data.push({
            agencyDesc: elememt.agencyDesc,
          });
        });
      }
    });
  }

  createColumnName(data: any) {
    if (data.length >= 1) {
      const object = data[0];
      const columns = [];
      for (let key in object) {
        columns.push({ attrId: key, attrName: 'Label.' + key });
      }
      this.columns = columns;
    }
  }
}
