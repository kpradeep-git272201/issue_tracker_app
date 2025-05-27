import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { ClickOutsideDirective } from '../../../../click-outside.directive';

@Component({
  selector: 'app-custom-select',
  imports: [MaterialModule,ClickOutsideDirective],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss'
})
export class CustomSelectComponent {
  @Input() options: any[] = [];
  @Input() optionLabel: string = 'label';
  @Input() placeholder: string = 'Select';
  @Input() filterBy: string = 'label';
  @Input() showClear: boolean = false;
  @Input() selected: any = null;
  @Input() selectedFinancialYear: any;
  @Output() selectedChange = new EventEmitter<any>();
  @Output() addItemEvent = new EventEmitter<any>();

  filterText: string = '';
  dropdownOpen: boolean = false;

  get filteredOptions() {
    if (!this.filterText) return this.options;
    return this.options.filter(opt =>
      opt[this.filterBy].toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  ngOnInit(){
 
  
  }
  selectOption(option: any) {
    this.selected = option;
    this.selectedChange.emit(option);
    this.addItemEvent.emit(option);
    this.dropdownOpen = false;
  }

  clearSelection() {
    this.selected = null;
    this.selectedChange.emit(null);
    this.addItemEvent.emit(null);
    this.addItemEvent.emit(null);
    this.filterText = '';
  }
}
