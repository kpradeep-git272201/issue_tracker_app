import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-map-bank-branch',
  imports: [MaterialModule],
  templateUrl: './map-bank-branch.component.html',
  styleUrl: './map-bank-branch.component.scss'
})
export class MapBankBranchComponent {
form: FormGroup;
  banks = ['Bandhan Bank', 'SBI', 'HDFC', 'ICICI'];
  districtPanchayats = ['District A', 'District B', 'District C'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      bankName: [''],
      districtPanchayat: ['']
    });
  }

  onSave() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
    }
  }

  onClear() {
    this.form.reset();
  }

  onClose() {
    
  }
}
