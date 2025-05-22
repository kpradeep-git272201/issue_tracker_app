import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../admin/components/login/login.component';
import { AuthService } from '../../../services/planning/auth.service';

@Component({
  selector: 'app-main-header',
  imports: [MaterialModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {
  isLoggedIn: boolean | undefined;

  constructor(private dialog: MatDialog,
    private authService: AuthService,
  ) {

  }

  ngOnInit(){
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }
  getLogin() {
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

  getDialog(action:string){
    if(action=='Notification'){

    }else if(action=='Settings'){

    }
  }

  logout(){
    this.authService.logout();
    this.isLoggedIn=this.authService.isAuthenticated();
  }
}
