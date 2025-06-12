import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { TranslateService } from '../../../services/language/translate.service';
import { KeyImpactAreasService } from '../../../services/json/keyImpactArea/key-impact-areas.service';

@Component({
  selector: 'app-key-impact-area',
  standalone: true, 
  imports: [MaterialModule],
  templateUrl: './key-impact-area.component.html',
  styleUrls: ['./key-impact-area.component.scss'] 
})
export class KeyImpactAreaComponent implements OnInit {
  objectKeys = Object.keys;
  keyImpactArea: any[] = [];

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private keyImpactAreaService: KeyImpactAreasService 
  ) {}

  ngOnInit() { 
    if(this.isBrowser()){
      this.getKeyImpactArea();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
    }
  }
  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
  getKeyImpactArea() {
    this.keyImpactArea = this.keyImpactAreaService.getKeyImpactArea();
  }
}
