import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../services/planning/auth.service';
import { LoginComponent } from '../../../admin/components/login/login.component';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isLoggedIn: boolean | undefined;
  loggedUser: any;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });

    if (isPlatformBrowser(this.platformId)) {
      const userString = localStorage.getItem('userJson');
      if (userString) {
        this.loggedUser = JSON.parse(userString).data;
      }
    }
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
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed. Received:', result);
    });
  }

  closeDialog() {}

  getDialog(action: string) {
    if (action == 'Notification') {
    } else if (action == 'Settings') {
    }
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = this.authService.isAuthenticated();
    if (!this.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }
}
