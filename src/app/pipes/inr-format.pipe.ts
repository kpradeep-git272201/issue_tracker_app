import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrFormat',
  standalone: true
})
export class InrFormatPipe implements PipeTransform {


  transform(value: any | number, amountType?: any): string {
    if (!value) return '';
    
    let formattedValue = `\u20B9${value}`; // uincode
    
    if (amountType) {
      formattedValue += ` ${amountType}`;
    }

    return formattedValue;
  }

}
