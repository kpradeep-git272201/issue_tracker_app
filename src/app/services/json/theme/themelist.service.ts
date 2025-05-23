import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemelistService {
  constructor() {}

  getThemeList() {
    return {
      filterName: 'Theme',
      filterData: [
        {
          code: 1,
          vlaue: 'Theme 1 - Poverty Free and Enhanced Livelihoods Village',
        },
        {
          code: 2,
          vlaue: 'Theme 2 - Healthy Village',
        },
        {
          code: 3,
          vlaue: 'Theme 3 - Child Friendly Village',
        },
        {
          code: 4,
          vlaue: 'Theme 4 - Water Sufficient Village',
        },
        {
          code: 5,
          vlaue: 'Theme 5 - Clean and Green Village',
        },
        {
          code: 6,
          vlaue: 'Theme 6 - Self-sufficient Infrastructure in Village',
        },
        {
          code: 7,
          vlaue: 'Theme 7 - Socially Just and Socially Secured Village',
        },
        {
          code: 8,
          vlaue: 'Theme 8 - Village with Good Governance',
        },
        {
          code: 9,
          vlaue: 'Theme 9 - Women Friendly Village',
        }
      ]
    }
  }
}
