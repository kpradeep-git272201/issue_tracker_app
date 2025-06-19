import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrormsgComponent } from '../../shared/message/error/errormsg.component';
import { WarnmsgComponent } from '../../shared/message/warning/warnmsg.component';
import { SnackbarComponent } from '../../shared/message/success/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private snackBar: MatSnackBar) {}


  getSuccessMessage(message?: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: {
        message: message,
        onContinue: () => {
      
        },
      },
      duration: undefined,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['no-auto-dismiss'],
    });
  }

 
  getWarnMessage(message?: string) {
    this.snackBar.openFromComponent(WarnmsgComponent, {
      data: {
        message: message,
        onContinue: () => {
        
        },
      },
      duration: undefined,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['no-auto-dismiss'],
    });
  }

    getErrorMessage(message?: string) {
    this.snackBar.openFromComponent(ErrormsgComponent, {
      data: {
        message: message,
        onContinue: () => {},
      },
      duration: undefined,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['no-auto-dismiss'],
    });
  }
}
