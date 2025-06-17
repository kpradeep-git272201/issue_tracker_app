/* import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

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
    FormsModule
  ],
  templateUrl: './add-benificary.component.html',
  styleUrl: './add-benificary.component.scss'
})
export class AddBenificaryComponent {
  agencyForm: FormGroup;

   constructor(private fb: FormBuilder) {
    this.agencyForm = this.fb.group({
      agencyName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],

      email: [''],
      pan: [''],
      tan: [''],
      tin: [''],
      gst: ['']
    });
  }

  get panValid(): boolean {
    const value = this.agencyForm.get('pan')?.value || '';
    return value === '' || /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value);
  }

  

  get tanValid(): boolean {
    const value = this.agencyForm.get('tan')?.value || '';
    return value === '' || /^[A-Z]{4}[0-9]{5}[A-Z]$/.test(value);
  }

  get gstValid(): boolean {
    const value = this.agencyForm.get('gst')?.value || '';
    return value === '' || /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value);
  }

  save() {
    if (this.agencyForm.valid && this.panValid && this.tanValid && this.gstValid) {
      console.log('Form Data:', this.agencyForm.value);
    } else {
      this.agencyForm.markAllAsTouched();
    }
  }

  clear() {
    this.agencyForm.reset();
  }

  close() {
    console.log('Closed');
  }

digitsOnly(event: KeyboardEvent): void {
  const allowed =
    event.key === 'Backspace' || event.key === 'Tab' ||
    event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
    /^[0-9]$/.test(event.key);

  if (!allowed) {
    event.preventDefault();   
  }
}



}
  */

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

/* ✅ Reusable RegExp-based validator */
function regexValidator(pattern: RegExp, errorKey: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    if (!value) return null; // Allow empty
    return pattern.test(value) ? null : { [errorKey]: true };
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

  constructor(private fb: FormBuilder) {
    this.agencyForm = this.fb.group({
      agencyName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', Validators.email],
      pan: ['', regexValidator(/^[A-Z]{5}[0-9]{4}[A-Z]$/, 'invalidPan')],
      tan: ['', regexValidator(/^[A-Z]{4}[0-9]{5}[A-Z]$/, 'invalidTan')],
      tin: [''],
      gst: ['']
    });
  }

  save(): void {
    if (this.agencyForm.valid) {
      console.log('✅ Form Data:', this.agencyForm.value);
    } else {
      this.agencyForm.markAllAsTouched();
      console.warn('❌ Validation Errors:', this.collectErrors());
    }
  }

  clear(): void {
    this.agencyForm.reset();
  }

  close(): void {
    console.log('Closed');
  }

  digitsOnly(event: KeyboardEvent): void {
    const allowed =
      event.key === 'Backspace' || event.key === 'Tab' ||
      event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
      /^[0-9]$/.test(event.key);

    if (!allowed) {
      event.preventDefault();
    }
  }

  // ✅ helper to print validation errors
  private collectErrors(): Record<string, any> {
    const errors: Record<string, any> = {};
    Object.keys(this.agencyForm.controls).forEach(key => {
      const controlErrors = this.agencyForm.get(key)?.errors;
      if (controlErrors) {
        errors[key] = controlErrors;
      }
    });
    return errors;
  }
}
