import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private donutData: any[] = [
    { category: 'Education', value: 25 },
    { category: 'Healthcare', value: 15 },
    { category: 'Infrastructure', value: 20 },
    { category: 'Agriculture', value: 10 },
    { category: 'Employment', value: 18 },
    { category: 'Social Welfare', value: 12 }
  ];

  private pieData: any[] = [
    { category: 'Initial X', value: 75 },
    { category: 'Initial Y', value: 25 }
  ];

  private barData: any[] = [
    { category: 'Jan', value: 100 },
    { category: 'Feb', value: 50 }
  ];




  constructor() { }

  getDonutData() {
    return this.donutData;
  }

  getPieData() {
    return this.pieData;
  }

  getBarData() {
    return this.barData;
  }


  setFilteredData(selectedData: any) {
    console.log(selectedData)
    this.donutData = [
      { category: 'Filtered A', value: 30 },
      { category: 'Filtered B', value: 70 },
      { category: 'Filtered C', value: 73 },
      { category: 'Filtered D', value: 15 },
      { category: 'Filtered E', value: 70 },
      { category: 'Filtered F', value: 70 },
    ];

    this.pieData = [
      { category: 'Filtered X', value: 55 },
      { category: 'Filtered Y', value: 45 }
    ];

    this.barData = [
      { category: 'Apr', value: 90 },
      { category: 'May', value: 60 }
    ];
  }



  getAppList() {
    return [
      {
        appId: 101,
        appName: "Dashboard",
        icon: "dashboard",
        childApp: false
      },
      {
        appId: 102,
        appName: "Product",
        icon: "home",
        childApp: true,
        subApps: [
          {
            appId: 1021,
            subAppName: "View Product",
            icon: "view_compact"
          },
          {
            appId: 1022,
            subAppName: "Add Product",
            icon: "add"
          },
          {
            appId: 1023,
            subAppName: "Categories",
            icon: "category"
          },
          {
            appId: 1024,
            subAppName: "Inventory",
            icon: "note_add"
          },
        ]
      },
      {
        appId: 103,
        appName: "Order",
        icon: "local_grocery_store",
        childApp: true,
        subApps: [
          {
            appId: 1031,
            subAppName: "View Order",
            icon: "view_compact"
          },
          {
            appId: 1032,
            subAppName: "Add Order",
            icon: "add"
          },
          {
            appId: 1033,
            subAppName: "Order Tracking",
            icon: "track_changes"
          },
          {
            appId: 1034,
            subAppName: "Return & Refunds",
            icon: "keyboard_return"
          },
        ]
      },

      {
        appId: 104,
        appName: "Customer",
        icon: "people",
        childApp: true,
        subApps: [
          {
            appId: 1041,
            subAppName: "Customer List",
            icon: "list"
          },
          {
            appId: 1042,
            subAppName: "Add Customer",
            icon: "person_add"
          },
          {
            appId: 1043,
            subAppName: "Customer Detail",
            icon: "Detail"
          },
          {
            appId: 1044,
            subAppName: "Feedback",
            icon: "feedback"
          },
          {
            appId: 1045,
            subAppName: "Manage Review",
            icon: "rate_review"
          },
        ]
      },
      {
        appId: 105,
        appName: "Admin",
        icon: "person",
        childApp: true,
        subApps: [
          {
            appId: 1051,
            subAppName: "Profile",
            icon: "rate_review"
          },
          {
            appId: 1052,
            subAppName: "Role Permissions",
            icon: "rate_review"
          },
          {
            appId: 1053,
            subAppName: "Setting",
            icon: "settings"
          },
          {
            appId: 1054,
            subAppName: "System Logs",
            icon: "system_update"
          },
          {
            appId: 1055,
            subAppName: "User Management",
            icon: "person"
          },
        ]
      },
      {
        appId: 106,
        appName: "Setting",
        icon: "settings",
        childApp: true,
        subApps: [
          {
            appId: 1061,
            subAppName: "profile-setting",
            icon: "settings"
          },
          {
            appId: 1062,
            subAppName: "Notification",
            icon: "notifications"
          },
          {
            appId: 1063,
            subAppName: "Payment Method",
            icon: "payment"
          },
          {
            appId: 1064,
            subAppName: "shipping Delivery",
            icon: "local_shipping"
          }
        ]
      },
      {
        appId: 107,
        appName: "Support",
        icon: "help",
        childApp: false
      },
      {
        appId: 107,
        appName: "Testing",
        icon: "edit",
        childApp: true,
        subApps: [
          {
            appId: 1071,
            subAppName: "Test",
            icon: "filter_tilt_shift"
          },
        ]
      },
    ];
  }

  //filter json
  getStateList() {
    return [
      { state_code: 28, state_name_english: 'ANDHRA PRADESH' },
      { state_code: 10, state_name_english: 'BIHAR' },
      { state_code: 9, state_name_english: 'UTTAR PRADESH' }
    ];
  }



  getDistrictList(stateCode: number) {
    const districtsByState: { [key: number]: { districtCode: number, districtNameEnglish: string }[] } = {
      28: [
        { districtCode: 745, districtNameEnglish: "Alluri Sitharama Raju" },
        { districtCode: 744, districtNameEnglish: "Anakapalli" },
        { districtCode: 517, districtNameEnglish: "Prakasam" },
      ],
      10: [
        { districtCode: 188, districtNameEnglish: "Araria" },
        { districtCode: 611, districtNameEnglish: "Arwal" },
        { districtCode: 189, districtNameEnglish: "Aurangabad" },
      ],
      9: [
        { districtCode: 118, districtNameEnglish: "Agra" },
        { districtCode: 119, districtNameEnglish: "Aligarh" },
        { districtCode: 121, districtNameEnglish: "Ambedkar Nagar" }
      ]
    };

    return districtsByState[stateCode] || [];
  }


  getReportData() {
    return {
      tableColumns: [
        { field: 'gp', header: 'GP', filterType: 'dropdown', filterOptions: ['Patto Jawahar Singh', 'Beer Badhni', 'Ransih Kalan', 'Patto Hira Singh', 'Nangal', 'Lopon', 'Geziana', 'Saidoke', 'Takhtupura', 'Badhni Khurd'], visible: true },
        { field: 'gpCode', header: 'GP Code', sortable: true, visible: true },
        { field: 'schemeName', header: 'Scheme Name', visible: true },
        { field: 'schemeComponent', header: 'Scheme Component', visible: true },
        { field: 'focusArea', header: 'Focus Area', visible: true },
        { field: 'activityCode', header: 'Activity Code', visible: true },
        { field: 'activityName', header: 'Activity Name', visible: true },
        { field: 'locationOfAsset', header: 'Location of Asset', visible: true },
        { field: 'estimatedCost', header: 'Estimated Cost', sortable: true, visible: true },
        { field: 'technicalSanctionedAmount', header: 'Tech. Sanctioned Amount', visible: true },
        { field: 'administrativeSanctionedAmount', header: 'Admin. Sanctioned Amount', visible: true },
        { field: 'expenditure', header: 'Expenditure', visible: true },
        { field: 'activityStatus', header: 'Status', filterType: 'dropdown', filterOptions: ['Activity Approved'], visible: true },
        { field: 'financialYear', header: 'Financial Year', filterType: 'dropdown', filterOptions: ['2025-2026', '2023-2024'], visible: true },
        { field: 'stateCode', header: 'State Code', sortable: true, visible: true },
        { field: 'districtCode', header: 'District Code', sortable: true, visible: true }
      ],
      tableData: [
        {
          "gp": "Patto Jawahar Singh",
          "gpCode": "236289",
          "schemeName": "XV Finance Commission",
          "schemeComponent": "Tied Grant",
          "focusArea": "Drinking water",
          "activityCode": "106179455",
          "activityName": "Water Supply to villages",
          "locationOfAsset": "Patto Jawahar Singh (153)",
          "estimatedCost": 174530,
          "technicalSanctionedAmount": null,
          "administrativeSanctionedAmount": null,
          "expenditure": null,
          "activityStatus": "Activity Approved",
          "financialYear": "2025-2026",
          "stateCode": 28,
          "districtCode": 745
        },
        {
          "gp": "Beer Badhni",
          "gpCode": "17281",
          "schemeName": "XV Finance Commission",
          "schemeComponent": "Tied Grant",
          "focusArea": "Drinking water",
          "activityCode": "106183797",
          "activityName": "Water Supply to villages",
          "locationOfAsset": "Bir Badni (102)",
          "estimatedCost": 195260,
          "technicalSanctionedAmount": null,
          "administrativeSanctionedAmount": null,
          "expenditure": null,
          "activityStatus": "Activity Approved",
          "financialYear": "2023-2024",
          "stateCode": 10,
          "districtCode": 611
        },
        {
          "gp": "Ransih Kalan",
          "gpCode": "17307",
          "schemeName": "XV Finance Commission",
          "schemeComponent": "Tied Grant",
          "focusArea": "Drinking water",
          "activityCode": "106186378",
          "activityName": "Water Supply to villages",
          "locationOfAsset": "Ransih Kalan (156)",
          "estimatedCost": 489510,
          "technicalSanctionedAmount": null,
          "administrativeSanctionedAmount": null,
          "expenditure": null,
          "activityStatus": "Activity Approved",
          "financialYear": "2025-2026",
          "stateCode": 28,
          "districtCode": 745
        },
        {
          "gp": "Patto Hira Singh",
          "gpCode": "17304",
          "schemeName": "XV Finance Commission",
          "schemeComponent": "Tied Grant",
          "focusArea": "Drinking water",
          "activityCode": "106188579",
          "activityName": "Water Supply to villages",
          "locationOfAsset": "Patto Hira Singh (154)",
          "estimatedCost": 1192320,
          "technicalSanctionedAmount": null,
          "administrativeSanctionedAmount": null,
          "expenditure": null,
          "activityStatus": "Activity Approved",
          "financialYear": "2023-2024",
          "stateCode": 10,
          "districtCode": 611
        },
        {
          "gp": "Nangal",
          "gpCode": "17301",
          "schemeName": "XV Finance Commission",
          "schemeComponent": "Tied Grant",
          "focusArea": "Drinking water",
          "activityCode": "106204574",
          "activityName": "Water Supply to villages",
          "locationOfAsset": "Nangal (164)",
          "estimatedCost": 497985,
          "technicalSanctionedAmount": null,
          "administrativeSanctionedAmount": null,
          "expenditure": null,
          "activityStatus": "Activity Approved",
          "financialYear": "2025-2026",
          "stateCode": 28,
          "districtCode": 745
        },
        {
          "gp": "Lopon",
          "gpCode": "17296",
          "schemeName": "XV Finance Commission",
          "schemeComponent": "Tied Grant",
          "focusArea": "Drinking water",
          "activityCode": "106207918",
          "activityName": "Water Supply to villages",
          "locationOfAsset": "Lopon (99)",
          "estimatedCost": 1594390,
          "technicalSanctionedAmount": null,
          "administrativeSanctionedAmount": null,
          "expenditure": null,
          "activityStatus": "Activity Approved",
          "financialYear": "2023-2024",
          "stateCode": 10,
          "districtCode": 611
        },
        {
          "gp": "Geziana",
          "gpCode": "17289",
          "schemeName": "XV Finance Commission",
          "schemeComponent": "Tied Grant",
          "focusArea": "Drinking water",
          "activityCode": "106208670",
          "activityName": "Water Supply to villages",
          "locationOfAsset": "Ghaziana (147)",
          "estimatedCost": 320390,
          "technicalSanctionedAmount": null,
          "administrativeSanctionedAmount": null,
          "expenditure": null,
          "activityStatus": "Activity Approved",
          "financialYear": "2025-2026",
          "stateCode": 28,
          "districtCode": 745
        },
        {
          "gp": "Saidoke",
          "gpCode": "17311",
          "schemeName": "XV Finance Commission",
          "schemeComponent": "Tied Grant",
          "focusArea": "Drinking water",
          "activityCode": "106209504",
          "activityName": "Water Supply to villages",
          "locationOfAsset": "Saido -Ke (159)",
          "estimatedCost": 1401110,
          "technicalSanctionedAmount": null,
          "administrativeSanctionedAmount": null,
          "expenditure": null,
          "activityStatus": "Activity Approved",
          "financialYear": "2023-2024",
          "stateCode": 10,
          "districtCode": 611
        },
        {
          "gp": "Takhtupura",
          "gpCode": "17312",
          "schemeName": "XV Finance Commission",
          "schemeComponent": "Tied Grant",
          "focusArea": "Drinking water",
          "activityCode": "106336540",
          "activityName": "Water Supply to villages",
          "locationOfAsset": "Takhtu Pura (162)",
          "estimatedCost": 836770,
          "technicalSanctionedAmount": null,
          "administrativeSanctionedAmount": null,
          "expenditure": null,
          "activityStatus": "Activity Approved",
          "financialYear": "2025-2026",
          "stateCode": 28,
          "districtCode": 745
        },
        {
          "gp": "Badhni Khurd",
          "gpCode": "17277",
          "schemeName": "XV Finance Commission",
          "schemeComponent": "Tied Grant",
          "focusArea": "Drinking water",
          "activityCode": "106717727",
          "activityName": "Water Supply to villages",
          "locationOfAsset": "Badhni Khurd (100)",
          "estimatedCost": 314440,
          "technicalSanctionedAmount": null,
          "administrativeSanctionedAmount": null,
          "expenditure": null,
          "activityStatus": "Activity Approved",
          "financialYear": "2023-2024",
          "stateCode": 10,
          "districtCode": 611
        }
      ]
    }
  }

}
