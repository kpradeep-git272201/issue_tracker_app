import { Component, inject } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from '../admin/components/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/planning/auth.service';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-top-header',
  imports: [MaterialModule, TranslateModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss',
})
export class TopHeaderComponent {
  isLoggedIn: boolean | undefined;
  translate: TranslateService = inject(TranslateService);

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    /** this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    }); */
    this.isLoggedIn = this.authService.isAuthenticated();
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

   switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('appLang', lang);
  }
}
