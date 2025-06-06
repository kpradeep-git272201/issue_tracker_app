import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { TopHeaderComponent } from '../../../top-header/top-header.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { SubHeaderComponent } from '../../layout/sub-header/sub-header.component';
import { KeyImpactAreaComponent } from '../key-impact-area/key-impact-area.component';
import { ReportsComponent } from '../reports/reports.component';
import { SupportingDocumentComponent } from '../supporting-document/supporting-document.component';
import { PublicFooterComponent } from '../public-footer/public-footer.component';
import { SubFooterComponent } from '../sub-footer/sub-footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '../../../services/language/translate.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [
    MaterialModule,
    TranslateModule,
    TopHeaderComponent,
    HeaderComponent,
    SubHeaderComponent,
    KeyImpactAreaComponent,
    ReportsComponent,
    SupportingDocumentComponent,
    PublicFooterComponent,
    SubFooterComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements AfterViewInit {
  translate: 'Swacchh Survekshan' | any;

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // this.translateService.loadBhashiniScript();
    }
  }
}
