import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-header',
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  opened=true;

  @Output() openedStatus = new EventEmitter<any>();


  openedSideNav(){
    this.opened=!this.opened;
    this.openedStatus.emit(this.opened)
  }
  
}
