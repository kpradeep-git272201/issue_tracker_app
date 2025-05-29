import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { MenuComponent } from "../../layout/menu/menu.component";
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-dashboard',
  imports: [MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
