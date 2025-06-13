import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TostService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(message: string, duration: number = 3000, panelClass: string = 'info') {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: panelClass // CSS class for color styling
    });
  }


}
