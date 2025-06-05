import { Component } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from "../menu/menu.component";
import { TopHeaderComponent } from "../../../top-header/top-header.component";
import { SubHeaderComponent } from '../sub-header/sub-header.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, SubHeaderComponent, MenuComponent, TopHeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
