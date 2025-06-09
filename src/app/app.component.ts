import { AfterViewInit, Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { SidenavComponent } from './layout/components/sidenav/sidenav.component';
import { MainHeaderComponent } from './layout/components/main-header/main-header.component';
import { IconsService } from './services/icons/icons.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FooterComponent } from './layout/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { TranslateService } from './services/language/translate.service';
import { ThemeService } from './services/themes/theme.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule], //SidenavComponent, MainHeaderComponent,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit{
  title = 'integrated_dashboard';
  opened: any = true;
  translate: TranslateService = inject(TranslateService);
  constructor(
    private iconService: IconsService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private themeService: ThemeService
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
}
