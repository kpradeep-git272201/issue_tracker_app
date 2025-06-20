import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MaterialModule } from '../../../material/material.module';


@Component({
  selector: 'app-snackbar',
  imports: [MaterialModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {

  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ){

  }

  onContinue() {
    this.snackBarRef.dismiss();
    if (this.data?.onContinue) {
      this.data.onContinue(); // Trigger callback if passed
    }
  }
}
