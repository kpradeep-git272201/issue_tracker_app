import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-warnmsg',
  imports: [MaterialModule],
  templateUrl: './warnmsg.component.html',
  styleUrl: './warnmsg.component.scss'
})
export class WarnmsgComponent {
constructor(
    public snackBarRef: MatSnackBarRef<WarnmsgComponent>,
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
