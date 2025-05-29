import { Component } from '@angular/core';
import { SidenavComponent } from "./layout/components/sidenav/sidenav.component";
import { MainHeaderComponent } from './layout/components/main-header/main-header.component';
import { IconsService } from './services/icons/icons.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FooterComponent } from './layout/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], //SidenavComponent, MainHeaderComponent, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'integrated_dashboard';
  opened: any=true;

  constructor(private iconService: IconsService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ){

    this.iconService.getIconName().forEach(icon => {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`icons/${icon}.svg`)
      );
    });

  }

  
  getOpenedStat(event: any) {
    this.opened = event;
  }
  
}
