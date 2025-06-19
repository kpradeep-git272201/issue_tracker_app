import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-errormsg',
  imports: [MaterialModule],
  templateUrl: './errormsg.component.html',
  styleUrl: './errormsg.component.scss'
})
export class ErrormsgComponent {
constructor(
    public snackBarRef: MatSnackBarRef<ErrormsgComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ){

  }

  onContinue() {
    this.snackBarRef.dismiss();
    if (this.data?.onContinue) {
      this.data.onContinue(); 
    }
  }
}
