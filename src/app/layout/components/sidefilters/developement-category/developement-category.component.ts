import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';


@Component({
  selector: 'app-developement-category',
  imports: [MaterialModule],
  templateUrl: './developement-category.component.html',
  styleUrl: './developement-category.component.scss'
})
export class DevelopementCategoryComponent {
  @Input() opened: boolean = false;
  categories = [
    { label: 'Road & Infrastructure', checked: true },
    { label: 'Education', checked: true },
    { label: 'Healthcare', checked: true },
    { label: 'Water Supply', checked: true },
    { label: 'Sanitation', checked: true }
  ];

  constructor(){

  }
}
