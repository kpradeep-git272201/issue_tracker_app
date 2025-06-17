import { Component } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators,
  AbstractControl, ValidationErrors, ValidatorFn,
  ReactiveFormsModule, FormsModule
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material/material.module';
import { AccountingService } from '../../../../services/restricted/accounting/accounting.service';
import { TostService } from '../../../../shared/message/tost.service';

function regexValidator(pattern: RegExp, errorKey: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    return !value || pattern.test(value) ? null : { [errorKey]: true };
  };
}

@Component({
  selector: 'app-add-benificary',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  templateUrl: './add-benificary.component.html',
  styleUrl: './add-benificary.component.scss'
})
export class AddBenificaryComponent {
  agencyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountingService: AccountingService,
    private tostService: TostService
  ) {
    this.agencyForm = this.fb.group({
      agencyName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.email]],
      pan: ['', regexValidator(/^[A-Z]{5}[0-9]{4}[A-Z]$/, 'invalidPan')],
      tan: ['', regexValidator(/^[A-Z]{4}[0-9]{5}[A-Z]$/, 'invalidTan')],
      tin: [''],
      gst: ['']
    });
  }

  onSave(): void {
    if (this.agencyForm.valid) {
      const data = this.agencyForm.value;

      this.accountingService.masterAgency(data).subscribe({
        next: (resp: any) => {
          if (resp?.status === 200) {
            this.showMessage(resp.body, 'success');
            this.agencyForm.reset();
          } else {
            this.showMessage(resp.body, 'error');
          }
        },
        error: (err) => {
          this.showMessage('Something went wrong', 'error');
          console.error('API Error:', err);
        }
      });
    } else {
      this.agencyForm.markAllAsTouched();
      this.showMessage('Please correct validation errors.', 'error');
    }
  }

  clear(): void {
    this.agencyForm.reset();
  }

  close(): void {
    console.log('Form closed');
  }

  digitsOnly(event: KeyboardEvent): void {
    const allowed =
      ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(event.key) ||
      /^[0-9]$/.test(event.key);
    if (!allowed) {
      event.preventDefault();
    }
  }

  showMessage(message: string, type: 'success' | 'error'): void {
    this.tostService.showMessage(message, 3000, type);
  }
}
