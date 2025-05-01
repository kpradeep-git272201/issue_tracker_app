import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-geographical-filter',
  imports: [MaterialModule],
  templateUrl: './geographical-filter.component.html',
  styleUrl: './geographical-filter.component.scss'
})
export class GeographicalFilterComponent {
  @Input() opened: boolean = false;
  states = ['All State'];
  districts = ['All District'];
  panchayats = ['All Panchayat'];

  selectedState = 'All State';
  selectedDistrict = 'All District';
  selectedPanchayat = 'All Panchayat';

  constructor(){

  }
}
