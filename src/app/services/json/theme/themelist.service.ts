import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemelistService {
  constructor() {}

  getThemeList() {
    return {
      filterName: 'Themes',
      filterData: [
        {
          code: 1,
          value: 'Theme 1 - Poverty Free and Enhanced Livelihoods Village',
        },
        {
          code: 2,
          value: 'Theme 2 - Healthy Village',
        },
        {
          code: 3,
          value: 'Theme 3 - Child Friendly Village',
        },
        {
          code: 4,
          value: 'Theme 4 - Water Sufficient Village',
        },
        {
          code: 5,
          value: 'Theme 5 - Clean and Green Village',
        },
        {
          code: 6,
          value: 'Theme 6 - Self-sufficient Infrastructure in Village',
        },
        {
          code: 7,
          value: 'Theme 7 - Socially Just and Socially Secured Village',
        },
        {
          code: 8,
          value: 'Theme 8 - Village with Good Governance',
        },
        {
          code: 9,
          value: 'Theme 9 - Women Friendly Village',
        }
      ]
    }
  }
}
