import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SchemelistService {
  constructor() {}

  getSchemeList() {
    return {
      filterName: 'Scheme',
      filterData: [
        {
          stateCode: 9,
          schemeList: [
            {
              id: 904,
              name: 'State Finance Commission',
            },
            {
              id: 1764,
              name: 'Mukhya Mantri Panchayat Protsahan Purashkar Yojna',
            },
            {
              id: 1771,
              name: '5th State Finance Commission',
            },
            {
              id: 1056,
              name: 'Sansad Nidhi',
            },
            {
              id: 1055,
              name: 'II State Finance Commission',
            },
            {
              id: 1536,
              name: 'Snangrih Nirmaan',
            },
            {
              id: 1057,
              name: 'Vidhayak Nidhi',
            },
            {
              id: 1054,
              name: 'III State Finance Commision',
            },
            {
              id: 1501,
              name: 'Antyeshti Sthalon Ka Vikas',
            },
            {
              id: 1655,
              name: 'Garh Mela',
            },
            {
              id: 1511,
              name: '4th State Finance Commission',
            },
            {
              id: 1500,
              name: 'Uttar Pradesh New and Renewable Energy Development Agency',
            },
            {
              id: 1558,
              name: 'i-Sparsh Smart gram yojna',
            },
            {
              id: 1541,
              name: 'Bahuddeshiye Panchayat Bhawan',
            },
          ],
        },
        {
          stateCode: 10,
          schemeList: [
            {
              id: 1324,
              name: 'Bihar Panchayat Sarkar Bhawan',
            },
            {
              id: 1331,
              name: '4th Finance Commission',
            },
            {
              id: 1659,
              name: 'Mukhya Mantri Nischay Yojna',
            },
          ],
        },
        {
          stateCode: 28,
          schemeList: [
            {
              id: 1221,
              name: 'Jhanma Bhumi',
            },
            {
              id: 303,
              name: 'Rural Roads Maintenance',
            },
            {
              id: 304,
              name: 'Minimum Needs Program',
            },
            {
              id: 305,
              name: 'Secondary School Buildings',
            },
            {
              id: 307,
              name: 'Normal State Plan',
            },
            {
              id: 306,
              name: 'Assembly Constituency Development Programme',
            },
            {
              id: 1222,
              name: 'Neeru Merru',
            },
            {
              id: 1223,
              name: 'Prajala Vaddaku Palana',
            },
            {
              id: 1224,
              name: 'Rachna Banda',
            },
            {
              id: 1225,
              name: 'Shrama danam',
            },
            {
              id: 1226,
              name: 'Unanimous elected GP',
            },
            {
              id: 1227,
              name: 'Woman and Child Welfare',
            },
            {
              id: 308,
              name: 'State Finance Commission',
            },
          ],
        },
        {
          schemeCode: 306,
          schemeComponentList: [
            { id: 311, name: 'Assembly Constituency Development Programme' },
          ],
        },
        {
          schemeCode: 304,
          schemeComponentList: [{ id: 314, name: 'Minimum Needs Program' }],
        },
        {
          schemeCode: 307,
          schemeComponentList: [{ id: 315, name: 'Normal State Plan' }],
        },
        {
          schemeCode: 303,
          schemeComponentList: [{ id: 316, name: 'Rural Roads Maintenance' }],
        },
        {
          schemeCode: 305,
          schemeComponentList: [
            { id: 317, name: 'Secondary School Buildings' },
          ],
        },
        {
          schemeCode: 308,
          schemeComponentList: [{ id: 318, name: 'State Finance Commission' }],
        },
        {
          schemeCode: 1221,
          schemeComponentList: [{ id: 3068, name: 'Jhanma Bhumi' }],
        },
        {
          schemeCode: 1224,
          schemeComponentList: [{ id: 3071, name: 'Rachna Banda' }],
        },
        {
          schemeCode: 1226,
          schemeComponentList: [{ id: 3073, name: 'Unanimous elected GP' }],
        },
        {
          schemeCode: 1225,
          schemeComponentList: [{ id: 3072, name: 'Shrama danam' }],
        },
        {
          schemeCode: 1222,
          schemeComponentList: [{ id: 3069, name: 'Neeru Merru' }],
        },
        {
          schemeCode: 1223,
          schemeComponentList: [{ id: 3070, name: 'Prajala Vaddaku Palana' }],
        },
        {
          schemeCode: 1227,
          schemeComponentList: [
            { id: 3074, name: 'Component for Woman and Child Welfare' },
          ],
        },
      ],
    };
  }

  getSchemeComponentList() {
    return {
      filterName: 'Scheme Component',
      filterData: [
        {
          schemeCode: 1054,
          schemeComponentList: [
            { id: 2093, name: 'Development' },
            { id: 2094, name: 'Salary' },
            { id: 2095, name: 'Training' },
            { id: 2096, name: 'Pension' },
            { id: 2092, name: 'III State Finance Commision' },
            { id: 966, name: 'State Finance Commission' },
          ],
        },
        {
          schemeCode: 1541,
          schemeComponentList: [
            { id: 3951, name: 'Anudaan Sankhya-83' },
            { id: 3950, name: 'Anudaan Sankhya-14' },
          ],
        },
        {
          schemeCode: 1536,
          schemeComponentList: [
            { id: 3931, name: 'Construction Of Bathroom(Ishnangrah Nirmaan)' },
          ],
        },
        {
          schemeCode: 1055,
          schemeComponentList: [
            { id: 2097, name: 'II State Finance Commission' },
            { id: 2098, name: 'Development' },
            { id: 2099, name: 'Training' },
            { id: 2100, name: 'Salary' },
            { id: 2101, name: 'Pension' },
          ],
        },
        {
          schemeCode: 1056,
          schemeComponentList: [{ id: 2102, name: 'Sansad Nidhi' }],
        },
        {
          schemeCode: 1057,
          schemeComponentList: [{ id: 2103, name: 'Vidhayak Nidhi' }],
        },
        {
          schemeCode: 1511,
          schemeComponentList: [
            { id: 3859, name: 'Development' },
            { id: 3860, name: 'Training' },
            { id: 3861, name: 'Salary' },
            { id: 3863, name: 'Pension' },
            { id: 3855, name: '4th State Finance Commission' },
          ],
        },
        {
          schemeCode: 1500,
          schemeComponentList: [
            {
              id: 3858,
              name: 'Uttar Pradesh New and Renewable Energy Development Agency',
            },
          ],
        },
        {
          schemeCode: 1501,
          schemeComponentList: [
            { id: 3857, name: 'Antyeshti Sthalon Ka Vikas' },
          ],
        },
        {
          schemeCode: 1655,
          schemeComponentList: [{ id: 4129, name: 'Fair & Festival' }],
        },
        {
          schemeCode: 1558,
          schemeComponentList: [
            { id: 3988, name: 'i-Sparsh Smart gram yojna' },
          ],
        },
        {
          schemeCode: 1764,
          schemeComponentList: [
            { id: 4200, name: 'Award Fund' },
            { id: 4201, name: 'Development' },
            { id: 4202, name: 'Maintenance' },
            { id: 4203, name: 'Own Source of Revenue' },
            { id: 4204, name: 'Administrative Expenses' },
          ],
        },
        {
          schemeCode: 1771,
          schemeComponentList: [
            { id: 4216, name: 'Development' },
            { id: 4217, name: 'Training' },
            { id: 4218, name: 'Salary' },
            { id: 4219, name: 'Pension' },
          ],
        },
      ],
    };
  }
}
