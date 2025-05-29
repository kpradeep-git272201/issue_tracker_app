import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssetListService {
  constructor() {}

  getAssetCategory() {
    return [
      {
        focusCode: 1,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [
          { code: 77, value: 'Buildings' },
          { code: 4, value: 'Irrigation Sources' },
          { code: 6, value: 'Pond & Reservoir' },
          { code: 15, value: 'Roads, Bridges & Culverts' },
          { code: 63, value: 'Sanitation & Sewerage Facilities' },
        ],
      },
      {
        focusCode: 1,
        assetTypeCode: 1,
        filterName: 'Asset Category',
        filterData: [
          { code: 48, value: 'Computers and peripherals' },
          { code: 41, value: 'Office Equipment' },
        ],
      },
      {
        focusCode: 2,
        assetTypeCode: 1,
        filterName: 'Asset Category',
        filterData: [{ code: 41, value: 'Office Equipment' }],
      },
      {
        focusCode: 2,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [
          { code: 77, value: 'Buildings' },
          { code: 4, value: 'Irrigation Sources' },
          { code: 407, value: 'Land' },
          { code: 63, value: 'Sanitation & Sewerage Facilities' },
        ],
      },
      {
        focusCode: 3,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [
          { code: 77, value: 'Buildings' },
          { code: 4, value: 'Irrigation Sources' },
          { code: 6, value: 'Pond & Reservoir' },
          { code: 15, value: 'Roads, Bridges & Culverts' },
          { code: 63, value: 'Sanitation & Sewerage Facilities' },
          { code: 10, value: 'Water Sources & Structures' },
        ],
      },
      {
        focusCode: 4,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [
          { code: 77, value: 'Buildings' },
          { code: 103, value: 'Medical & Health Facilities' },
          { code: 15, value: 'Roads, Bridges & Culverts' },
          { code: 63, value: 'Sanitation & Sewerage Facilities' },
        ],
      },
      {
        focusCode: 5,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [
          { code: 77, value: 'Buildings' },
          { code: 6, value: 'Pond & Reservoir' },
          { code: 63, value: 'Sanitation & Sewerage Facilities' },
        ],
      },
      {
        focusCode: 6,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [
          { code: 77, value: 'Buildings' },
          { code: 410, value: 'Panchayat Trees & Plantation' },
          { code: 97, value: 'Recreational Facilities' },
          { code: 15, value: 'Roads, Bridges & Culverts' },
          { code: 63, value: 'Sanitation & Sewerage Facilities' },
        ],
      },
      {
        focusCode: 7,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [{ code: 77, value: 'Buildings' }],
      },
      {
        focusCode: 8,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [
          { code: 77, value: 'Buildings' },
          { code: 15, value: 'Roads, Bridges & Culverts' },
          { code: 63, value: 'Sanitation & Sewerage Facilities' },
        ],
      },
      {
        focusCode: 9,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [{ code: 63, value: 'Sanitation & Sewerage Facilities' }],
      },
      {
        focusCode: 10,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [
          { code: 77, value: 'Buildings' },
          { code: 4, value: 'Irrigation Sources' },
          { code: 97, value: 'Recreational Facilities' },
          { code: 15, value: 'Roads, Bridges & Culverts' },
          { code: 63, value: 'Sanitation & Sewerage Facilities' },
        ],
      },
      {
        focusCode: 11,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [
          { code: 462, value: 'Drinking water supply structure' },
          { code: 465, value: 'Grey water management' },
          { code: 4, value: 'Irrigation Sources' },
          { code: 63, value: 'Sanitation & Sewerage Facilities' },
          { code: 10, value: 'Water Sources & Structures' },
        ],
      },
      {
        focusCode: 12,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [{ code: 77, value: 'Buildings' }],
      },
      {
        focusCode: 13,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [
          { code: 77, value: 'Buildings' },
          { code: 4, value: 'Irrigation Sources' },
          { code: 97, value: 'Recreational Facilities' },
          { code: 15, value: 'Roads, Bridges & Culverts' },
          { code: 63, value: 'Sanitation & Sewerage Facilities' },
        ],
      },
      {
        focusCode: 14,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [
          { code: 77, value: 'Buildings' },
          { code: 60, value: 'Electrification' },
          { code: 15, value: 'Roads, Bridges & Culverts' },
          { code: 63, value: 'Sanitation & Sewerage Facilities' },
        ],
      },
      {
        focusCode: 15,
        assetTypeCode: 2,
        filterName: 'Asset Category',
        filterData: [
          { code: 77, value: 'Buildings' },
          { code: 63, value: 'Sanitation & Sewerage Facilities' },
        ],
      },
    ];
  }
}
