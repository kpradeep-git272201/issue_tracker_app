import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { TranslateService } from '../../../services/language/translate.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-key-impact-area',
  imports: [MaterialModule],
  templateUrl: './key-impact-area.component.html',
  styleUrl: './key-impact-area.component.scss'
})
export class KeyImpactAreaComponent {
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
