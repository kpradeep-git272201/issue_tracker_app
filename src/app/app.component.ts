import {
  AfterViewInit,
  Component,
  inject,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { IconsService } from './services/icons/icons.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { TranslateService } from './services/language/translate.service';
import { ThemeService } from './services/themes/theme.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule], //SidenavComponent, MainHeaderComponent,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'integrated_dashboard';
  opened: any = true;
  translate: TranslateService = inject(TranslateService);
  private router = inject(Router);
  constructor(
    private iconService: IconsService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object,
    private themeService: ThemeService,
  ) {
    this.themeService.loadTheme();
    this.iconService.getIconName().forEach((icon) => {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`icons/${icon}.svg`),
      );
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        localStorage.setItem('lastVisitedRoute', event.urlAfterRedirects);
      });
       this.restoreLastVisitedRoute();
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // this.translateService.loadBhashiniScript();
      // window.location.reload();
    }
  }

  getOpenedStat(event: any) {
    this.opened = event;
  }

   restoreLastVisitedRoute() {
    const currentUrl = this.router.url;
    const lastVisitedRoute = localStorage.getItem('lastVisitedRoute');

    // If we're on root or login, and lastVisitedRoute is valid
    if (
      (currentUrl === '/' || currentUrl === '/login') &&
      lastVisitedRoute &&
      lastVisitedRoute !== currentUrl
    ) {
      this.router.navigateByUrl(lastVisitedRoute);
    }
  }
}
