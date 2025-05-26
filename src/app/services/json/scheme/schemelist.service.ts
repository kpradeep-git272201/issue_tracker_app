import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SchemelistService {
  constructor() {}

  getSchemeList() {
    return {
      filtervalue: 'Scheme',
      filterData: [
        {
          stateCode: 9,
          schemeList: [
            {
              code: 904,
              value: 'State Finance Commission',
            },
            {
              code: 1764,
              value: 'Mukhya Mantri Panchayat Protsahan Purashkar Yojna',
            },
            {
              code: 1771,
              value: '5th State Finance Commission',
            },
            {
              code: 1056,
              value: 'Sansad Nidhi',
            },
            {
              code: 1055,
              value: 'II State Finance Commission',
            },
            {
              code: 1536,
              value: 'Snangrih Nirmaan',
            },
            {
              code: 1057,
              value: 'Vidhayak Nidhi',
            },
            {
              code: 1054,
              value: 'III State Finance Commision',
            },
            {
              code: 1501,
              value: 'Antyeshti Sthalon Ka Vikas',
            },
            {
              code: 1655,
              value: 'Garh Mela',
            },
            {
              code: 1511,
              value: '4th State Finance Commission',
            },
            {
              code: 1500,
              value: 'Uttar Pradesh New and Renewable Energy Development Agency',
            },
            {
              code: 1558,
              value: 'i-Sparsh Smart gram yojna',
            },
            {
              code: 1541,
              value: 'Bahuddeshiye Panchayat Bhawan',
            },
          ],
        },
        {
          stateCode: 10,
          schemeList: [
            {
              code: 1324,
              value: 'Bihar Panchayat Sarkar Bhawan',
            },
            {
              code: 1331,
              value: '4th Finance Commission',
            },
            {
              code: 1659,
              value: 'Mukhya Mantri Nischay Yojna',
            },
          ],
        },
        {
          stateCode: 28,
          schemeList: [
            {
              code: 1221,
              value: 'Jhanma Bhumi',
            },
            {
              code: 303,
              value: 'Rural Roads Maintenance',
            },
            {
              code: 304,
              value: 'Minimum Needs Program',
            },
            {
              code: 305,
              value: 'Secondary School Buildings',
            },
            {
              code: 307,
              value: 'Normal State Plan',
            },
            {
              code: 306,
              value: 'Assembly Constituency Development Programme',
            },
            {
              code: 1222,
              value: 'Neeru Merru',
            },
            {
              code: 1223,
              value: 'Prajala Vaddaku Palana',
            },
            {
              code: 1224,
              value: 'Rachna Banda',
            },
            {
              code: 1225,
              value: 'Shrama danam',
            },
            {
              code: 1226,
              value: 'Unanimous elected GP',
            },
            {
              code: 1227,
              value: 'Woman and Child Welfare',
            },
            {
              code: 308,
              value: 'State Finance Commission',
            }
          ]
        }
      ]
    };
  }

  getSchemeComponentList() {
    return {
      filtervalue: 'Scheme Component',
      filterData: [
        {
          schemeCode: 1054,
          schemeComponentList: [
            { code: 2093, value: 'Development' },
            { code: 2094, value: 'Salary' },
            { code: 2095, value: 'Training' },
            { code: 2096, value: 'Pension' },
            { code: 2092, value: 'III State Finance Commision' },
            { code: 966, value: 'State Finance Commission' },
          ],
        },
        {
          schemeCode: 1541,
          schemeComponentList: [
            { code: 3951, value: 'Anudaan Sankhya-83' },
            { code: 3950, value: 'Anudaan Sankhya-14' },
          ],
        },
        {
          schemeCode: 1536,
          schemeComponentList: [
            { code: 3931, value: 'Construction Of Bathroom(Ishnangrah Nirmaan)' },
          ],
        },
        {
          schemeCode: 1055,
          schemeComponentList: [
            { code: 2097, value: 'II State Finance Commission' },
            { code: 2098, value: 'Development' },
            { code: 2099, value: 'Training' },
            { code: 2100, value: 'Salary' },
            { code: 2101, value: 'Pension' },
          ],
        },
        {
          schemeCode: 1056,
          schemeComponentList: [{ code: 2102, value: 'Sansad Nidhi' }],
        },
        {
          schemeCode: 1057,
          schemeComponentList: [{ code: 2103, value: 'Vidhayak Nidhi' }],
        },
        {
          schemeCode: 1511,
          schemeComponentList: [
            { code: 3859, value: 'Development' },
            { code: 3860, value: 'Training' },
            { code: 3861, value: 'Salary' },
            { code: 3863, value: 'Pension' },
            { code: 3855, value: '4th State Finance Commission' },
          ],
        },
        {
          schemeCode: 1500,
          schemeComponentList: [
            {
              code: 3858,
              value: 'Uttar Pradesh New and Renewable Energy Development Agency',
            },
          ],
        },
        {
          schemeCode: 1501,
          schemeComponentList: [
            { code: 3857, value: 'Antyeshti Sthalon Ka Vikas' },
          ],
        },
        {
          schemeCode: 1655,
          schemeComponentList: [{ code: 4129, value: 'Fair & Festival' }],
        },
        {
          schemeCode: 1558,
          schemeComponentList: [
            { code: 3988, value: 'i-Sparsh Smart gram yojna' },
          ],
        },
        {
          schemeCode: 1764,
          schemeComponentList: [
            { code: 4200, value: 'Award Fund' },
            { code: 4201, value: 'Development' },
            { code: 4202, value: 'Maintenance' },
            { code: 4203, value: 'Own Source of Revenue' },
            { code: 4204, value: 'Administrative Expenses' },
          ],
        },
        {
          schemeCode: 1771,
          schemeComponentList: [
            { code: 4216, value: 'Development' },
            { code: 4217, value: 'Training' },
            { code: 4218, value: 'Salary' },
            { code: 4219, value: 'Pension' },
          ]
        }
      ]
    };
  }
}
