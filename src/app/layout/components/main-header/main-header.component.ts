import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../admin/components/login/login.component';

@Component({
  selector: 'app-main-header',
  imports: [MaterialModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {

  constructor(private dialog: MatDialog) {

  }

  getLogin(event: MouseEvent) {
    const dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '450px',
      panelClass: 'custom-login-dialog',
      data: {
        title: 'Login',
      },

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed. Received:', result);

    });
  }

  closeDialog(){

  }
}
