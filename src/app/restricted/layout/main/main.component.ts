import { Component } from '@angular/core';

import { SubHeaderComponent } from "../../../public/layout/sub-header/sub-header.component";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, SubHeaderComponent, MenuComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
