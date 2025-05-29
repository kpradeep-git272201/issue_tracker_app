import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from '../admin/components/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/planning/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-header',
  imports: [MaterialModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss'
})
export class TopHeaderComponent {
isLoggedIn: boolean | undefined;

  constructor(private dialog: MatDialog,
    private authService: AuthService,
    private router: Router
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
    if(!this.isLoggedIn){
      this.router.navigate(["/"])
    }
  }
}
