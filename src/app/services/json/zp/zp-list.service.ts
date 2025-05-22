import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZpListService {
  constructor() {}

  getZpList() {
    return [
      {
        stateCode: 9,
        zpList: [
          {
            code: 109,
            value: 'Agra',
          },
          {
            code: 110,
            value: 'Aligarh',
          },
          {
            code: 111,
            value: 'Prayagraj',
          },
          {
            code: 112,
            value: 'Ambedkar Nagar',
          },
          {
            code: 113,
            value: 'Auraiya',
          },
          {
            code: 114,
            value: 'Azamgarh',
          },
          {
            code: 115,
            value: 'Baghpat',
          },
          {
            code: 116,
            value: 'Bahraich',
          },
          {
            code: 117,
            value: 'Ballia',
          },
          {
            code: 118,
            value: 'Balrampur',
          }
        ]
      },
      {
        stateCode: 10,
        zpList: [
          {
            code: 179,
            value: 'Araria',
          },
          {
            code: 180,
            value: 'Aurangabad',
          },
          {
            code: 181,
            value: 'Banka',
          },
          {
            code: 182,
            value: 'Begusarai',
          },
          {
            code: 183,
            value: 'Bhagalpur',
          },
          {
            code: 184,
            value: 'Bhojpur',
          },
          {
            code: 185,
            value: 'Buxar',
          },
          {
            code: 188,
            value: 'Araria',
          },
          {
            code: 611,
            value: 'Arwal',
          },
          {
            code: 189,
            value: 'Aurangabad',
          }
        ]
      },
      {
        stateCode: 28,
        zpList: [
          {
            code: 458,
            value: 'Anantapur',
          },
          {
            code: 459,
            value: 'Chittoor',
          },
          {
            code: 460,
            value: 'Y.S.R.',
          },
          {
            code: 461,
            value: 'East Godavari',
          },
          {
            code: 462,
            value: 'Guntur',
          },
          {
            code: 465,
            value: 'Krishna',
          },
          {
            code: 466,
            value: 'Kurnool',
          },
          {
            code: 470,
            value: 'Spsr Nellore',
          },
          {
            code: 472,
            value: 'Prakasam',
          },
          {
            code: 474,
            value: 'Srikakulam',
          }
        ]
      }
    ];
  }
}
