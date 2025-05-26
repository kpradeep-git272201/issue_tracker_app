import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FocusareaListService {
  constructor() {}

  getFocusAreaList() {
    return {
      filterName: 'Sector/Focus Area',
      filterData: [
        { code: 1, value: 'Agriculture' },
        { code: 2, value: 'Land improvement' },
        { code: 3, value: 'Minor irrigation' },
        { code: 4, value: 'Animal husbandry' },
        { code: 5, value: 'Fisheries' },
        { code: 6, value: 'Social forestry and farm forestry' },
        { code: 7, value: 'Minor forest produce' },
        { code: 8, value: 'Small-scale industries' },
        { code: 9, value: 'Khadi' },
        { code: 10, value: 'Rural housing' },
        { code: 11, value: 'Drinking water' },
        { code: 12, value: 'Fuel and fodder' },
        { code: 13, value: 'Roads' },
        { code: 14, value: 'Rural electrification' },
        { code: 15, value: 'Non-conventional energy sources' },
        { code: 16, value: 'Poverty allevation programme' },
        { code: 17, value: 'Education' },
        { code: 18, value: 'Technical training and vocational education' },
        { code: 19, value: 'Adult and non-formal education' },
        { code: 20, value: 'Libraries' },
        { code: 21, value: 'Cultural activities' },
        { code: 22, value: 'Markets and fairs' },
        { code: 24, value: 'Family welfare' },
        { code: 25, value: 'Women and child development' },
        { code: 26, value: 'Social welfare' },
        { code: 27, value: 'Welfare of the weaker sections' },
        { code: 28, value: 'Public distribution system' },
        { code: 29, value: 'Maintenance of community system' },
        { code: 51, value: 'Tribal Welfare' },
        { code: 53, value: 'Administrative & Technical Support' },
        { code: 55, value: 'Health' },
        { code: 56, value: 'Sanitation' },
      ],
    };
  }
}
