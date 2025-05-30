import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { TopHeaderComponent } from "../../../top-header/top-header.component";
import { HeaderComponent } from "../../layout/header/header.component";
import { SubHeaderComponent } from "../../layout/sub-header/sub-header.component";

@Component({
  selector: 'app-landing',
  imports: [MaterialModule, TopHeaderComponent, HeaderComponent, SubHeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
