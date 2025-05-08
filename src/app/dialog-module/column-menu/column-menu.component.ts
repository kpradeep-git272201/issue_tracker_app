import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-column-menu',
  imports: [MaterialModule],
  templateUrl: './column-menu.component.html',
  styleUrl: './column-menu.component.scss'
})
export class ColumnMenuComponent {
  columns: any[] = [];
  selectedFields: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ColumnMenuComponent>){

    this.columns = data.columns;
    this.selectedFields = this.columns.filter(col => col.visible).map(col => col.field);
  }
  onToggle(field: string) {
    const index = this.selectedFields.indexOf(field);
    if (index >= 0) {
      this.selectedFields.splice(index, 1);
    } else {
      this.selectedFields.push(field);
    }
  }

  save() {
    this.dialogRef.close(this.selectedFields);
  }

  close() {
    this.dialogRef.close();
  }
}
