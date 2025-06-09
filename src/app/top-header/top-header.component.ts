import { Component, Inject, inject, PLATFORM_ID, signal } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from '../admin/components/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/planning/auth.service';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeMode, ThemeService } from '../services/themes/theme.service';
import { single } from 'rxjs';
@Component({
  selector: 'app-top-header',
  imports: [MaterialModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss',
})
export class TopHeaderComponent {
  isLoggedIn: boolean | undefined;
  translate: TranslateService = inject(TranslateService);
  selectedTheme: string = 'orange-theme';
  themeMode:any;
 
  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private themeService: ThemeService,
  ) {}

  ngOnInit() {
    /** this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    }); */
    this.isLoggedIn = this.authService.isAuthenticated();

    if (this.isBrowser()) {
      const themeName = localStorage.getItem('app-theme');
      if (themeName) {
        this.selectedTheme = themeName;
      }

      const savedLang = localStorage.getItem('appLang') || 'en';
      this.translate.use(savedLang);
    }
  }
  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
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
    this.themeService.clearTheme();
    this.isLoggedIn = this.authService.isAuthenticated();
    if (!this.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('appLang', lang);
  }

  changeTheme(theme: string) {
     this.selectedTheme = theme;
    this.themeService.setTheme(theme);
  }

  setThemeMode(){
    this.themeService.toggleTheme();
  }

 
}
