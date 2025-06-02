import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { TopHeaderComponent } from "../../../top-header/top-header.component";
import { HeaderComponent } from "../../layout/header/header.component";
import { SubHeaderComponent } from "../../layout/sub-header/sub-header.component";
import { KeyImpactAreaComponent } from "../key-impact-area/key-impact-area.component";
import { ReportsComponent } from "../reports/reports.component";
import { SupportingDocumentComponent } from "../supporting-document/supporting-document.component";
import { PublicFooterComponent } from "../public-footer/public-footer.component";

@Component({
  selector: 'app-landing',
  imports: [MaterialModule, TopHeaderComponent, HeaderComponent, SubHeaderComponent, KeyImpactAreaComponent, ReportsComponent, SupportingDocumentComponent, PublicFooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
