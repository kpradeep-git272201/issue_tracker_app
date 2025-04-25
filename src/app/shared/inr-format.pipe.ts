import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrFormat',
  standalone: true 
})
export class InrFormatPipe implements PipeTransform {

  transform(value: string | number, amountType?: string): string {
    if (!value) return '';
    
    let formattedValue = `₹${value}`;
    
    if (amountType) {
      formattedValue += ` ${amountType}`;
    }

    return formattedValue;
  }

}
