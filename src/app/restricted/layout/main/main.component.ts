import { Component } from '@angular/core';
import { HeaderComponent } from "../../../layout/components/header/header.component";
import { SubHeaderComponent } from "../../../public/layout/sub-header/sub-header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, SubHeaderComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
