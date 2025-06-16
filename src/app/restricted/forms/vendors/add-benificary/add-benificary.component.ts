import { Component } from '@angular/core';
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
      mobile: ['', Validators.required],
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
    // Add navigation or dialog close logic here
    console.log('Closed');
  }
}
