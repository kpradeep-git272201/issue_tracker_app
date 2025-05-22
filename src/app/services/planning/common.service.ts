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
   stateDataMap:any = {
    28: {
      donutData: [
        { category: 'Filtered A', value: 30 },
        { category: 'Filtered B', value: 70 },
        { category: 'Filtered C', value: 73 },
        { category: 'Filtered D', value: 15 },
        { category: 'Filtered E', value: 70 },
        { category: 'Filtered F', value: 70 },
      ],
      pieData: [
        { category: 'Filtered X', value: 55 },
        { category: 'Filtered Y', value: 45 },
      ],
      barData: [
        { category: 'Apr', value: 90 },
        { category: 'May', value: 60 },
      ],
    },
    10: {
      donutData: [
        { category: 'Filtered G', value: 20 },
        { category: 'Filtered H', value: 80 },
        { category: 'Filtered I', value: 40 },
        { category: 'Filtered J', value: 40 },
        { category: 'Filtered K', value: 40 },
        { category: 'Filtered L', value: 40 },
      ],
      pieData: [
        { category: 'Filtered Z', value: 65 },
        { category: 'Filtered W', value: 35 },
      ],
      barData: [
        { category: 'Apr', value: 75 },
        { category: 'May', value: 50 },
      ],
    },
    9: {
      donutData: [
        { category: 'Filtered M', value: 60 },
        { category: 'Filtered N', value: 30 },
        { category: 'Filtered O', value: 50 },
        { category: 'Filtered P', value: 50 },
        { category: 'Filtered Q', value: 50 },
        { category: 'Filtered R', value: 50 },
      ],
      pieData: [
        { category: 'Filtered M', value: 70 },
        { category: 'Filtered N', value: 30 },
      ],
      barData: [
        { category: 'Apr', value: 85 },
        { category: 'May', value: 45 },
      ],
    },
  };

  

  setFilteredData(selectedData: any) {
    const stateCode = selectedData.stateCode;
  
    const stateData = this.stateDataMap[stateCode];
    if (stateData) {
      this.donutData = stateData.donutData;
      this.pieData = stateData.pieData;
      this.barData = stateData.barData;
    } else {
      console.warn('No data found for stateCode:', stateCode);
      this.donutData = [];
      this.pieData = [];
      this.barData = [];
    }
  
    console.log('Filtered data set for stateCode:', stateCode);
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
        { districtCode: 109, districtNameEnglish: "Agra" },
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


  getChartData(){
    return [
      {
        "financialYear": "2025-2026",
        "stateCode": "9",
        "districtCode": "118",
        "chartId": "ThemeWiseActivitiesDistribution",
        "chartType": "Theme Wise Activities Distribution",
        "data": [
          { "category": "Theme 1 - Poverty Free and Enhanced Livelihoods Village", "value": 17.8 },
          { "category": "Theme 2 - Healthy Village", "value": 7.9 },
          { "category": "Theme 3 - Child Friendly Village", "value": 4.3 },
          { "category": "Theme 4 - Water Sufficient Village", "value": 14.3 },
          { "category": "Theme 5 - Clean and Green Village", "value": 17.1 },
          { "category": "Theme 6 - Self-sufficient Infrastructure in Village", "value": 26.7 },
          { "category": "Theme 7 - Socially Just and Socially Secured Village", "value": 5.2 },
          { "category": "Theme 8 - Village with Good Governance", "value": 2.5 },
          { "category": "Theme 9 - Women Friendly Village", "value": 3.2 }
        ]
      },
      {
        "financialYear": "2025-2026",
        "stateCode": "9",
        "districtCode": "118",
        "chartId": "SchemeWiseBudgetaryAllocation",
        "chartType": "Scheme Wise Budgetary Allocation",
        "data": [
          { "category": "XV Finance Commission", "value": 14.2 },
          { "category": "4th State Finance Commission (West Bengal)", "value": 1.3 },
          { "category": "5th State Finance Commission (Himachal Pradesh)", "value": 3.7 },
          { "category": "5TH STATE FINANCE COMMISSION (Odisha)", "value": 5.8 },
          { "category": "5th State Finance Commission (Uttar Pradesh)", "value": 9.1 },
          { "category": "5th State Finance Commission (West Bengal)", "value": 2.4 },
          { "category": "6th State Finance Commission (Sikkim)", "value": 1.2 },
          { "category": "AMA ODISHA NABIN ODISHA (Odisha)", "value": 0.9 },
          { "category": "Antyeshti Sthalon Ka Vikas (Uttar Pradesh)", "value": 2.5 },
          { "category": "AWC BUILDING (Odisha)", "value": 0.6 },
          { "category": "Backward Area Sub Plan (BASP) (Himachal Pradesh)", "value": 0.3 },
          { "category": "Bahuddeshiye Panchayat Bhawan (Uttar Pradesh)", "value": 0.5 },
          { "category": "Chief Minister Relief Fund (Himachal Pradesh)", "value": 1.1 },
          { "category": "CRITICAL GAP FUND (CGF) (Odisha)", "value": 1.9 },
          { "category": "DISTRICT MINERAL FUND (Odisha)", "value": 1.4 },
          { "category": "Fourth State Finance Camission (Uttarakhand)", "value": 6.3 },
          { "category": "Gaon ke Galiyon ka Antrik Vidyutikaran (Chhattisgarh)", "value": 0.2 },
          { "category": "Gram Panchayaton Ko Moolbhoot Karyon Hetu Anudan (Chhattisgarh)", "value": 0.3 },
          { "category": "Grant-in-Aid (Assistant to Gram Panchayat)", "value": 0.9 },
          { "category": "Grant-in-Aid (General) (Andaman And Nicobar Islands)", "value": 3.4 },
          { "category": "Grant-In-Aid (Honorarium) (Andaman And Nicobar Islands)", "value": 0.7 },
          { "category": "Grant-In-Aid (Maintenance) (Andaman And Nicobar Islands)", "value": 1.0 },
          { "category": "Grant-In-Aid (Matching Grant) (Andaman And Nicobar Islands)", "value": 1.3 },
          { "category": "Grant-in-Aid (Rural Road CCA) (Andaman And Nicobar Islands)", "value": 1.2 },
          { "category": "Grant-in-Aid (Rural Road General) (Andaman And Nicobar Islands)", "value": 3.9 },
          { "category": "Grant-in-Aid (Rural Water Supply) (Andaman And Nicobar Islands)", "value": 1.0 },
          { "category": "Grant-in-Aid (Sewerage & Sanitation) (Andaman And Nicobar Islands)", "value": 1.3 },
          { "category": "Haryana Gramin Vikas Yojana (Haryana)", "value": 3.7 },
          { "category": "Incentivisation of Panchayats - Rashtriya Gram Swaraj Abhiyan", "value": 2.4 },
          { "category": "Integrated Child Development Services", "value": 3.1 },
          { "category": "Jal Jeevan Mission", "value": 4.7 },
          { "category": "Janpad Panchayat Vikas Nidhi (Chhattisgarh)", "value": 0.2 },
          { "category": "Local Area Development Plan (Himachal Pradesh)", "value": 0.5 },
          { "category": "Member of Legislative Assembly Constituency Development Scheme (Tamil Nadu)", "value": 0.4 },
          { "category": "MG National Rural Employment Guarantee Act", "value": 10.3 },
          { "category": "Mid-Day Meal Scheme", "value": 1.8 },
          { "category": "MLA Local Area Development Scheme (Chhattisgarh)", "value": 0.3 },
          { "category": "Mukhya Mantri Adarsh Gram Yojana (MMAGY) (Himachal Pradesh)", "value": 0.7 },
          { "category": "Mukhya Mantri Awas Yojana (Himachal Pradesh)", "value": 0.1 },
          { "category": "Mukhya Mantri Gram Path Yojna (Himachal Pradesh)", "value": 0.3 },
          { "category": "Mukhya Mantri Panchayat Protsahan Purashkar Yojna (Uttar Pradesh)", "value": 1.1 },
          { "category": "Mukhya Mantri Samgra Grameen Vikas Yojna (Chhattisgarh)", "value": 0.2 },
          { "category": "National Rural Health Mission - NRHM", "value": 2.9 },
          { "category": "National Rural Livelihood Mission", "value": 3.3 },
          { "category": "National Rurban Mission", "value": 2.1 },
          { "category": "Own Funds", "value": 12.4 },
          { "category": "Panchayat Development Fund (Tripura)", "value": 1.9 },
          { "category": "Panchayat Extension to Scheduled Areas (Maharashtra)", "value": 2.2 },
          { "category": "Panchayat Padadhikarion Ko Mandeya evam Suvidhayen (Chhattisgarh)", "value": 0.3 },
          { "category": "Pradhan Mantri Gram Sadak Yojana - PMGSY", "value": 2.6 },
          { "category": "Pradhan Mantri Krishi Sinchayi Yojna", "value": 1.5 },
          { "category": "Prime Minister Gramin Awaas Yojana", "value": 4.2 },
          { "category": "Rashtriya Gram Swaraj Abhiyan", "value": 2.9 },
          { "category": "Rashtriya Krishi Vikas Yojana - RKVY", "value": 1.6 },
          { "category": "Sachiviya Vyavastha (Chhattisgarh)", "value": 0.1 },
          { "category": "Sarva Shiksha Abhiyan - SSA", "value": 1.5 },
          { "category": "Sectoral Decentralized Planning (Himachal Pradesh)", "value": 1.2 },
          { "category": "SFFC (Kerala)", "value": 1.3 },
          { "category": "Shradhanjali Yojna (Chhattisgarh)", "value": 0.1 },
          { "category": "Special Component Sub Plan for Scheduled Castes (Himachal Pradesh)", "value": 0.3 },
          { "category": "State Finance Commission Grants (Tamil Nadu)", "value": 2.5 },
          { "category": "State Finance Commission~SFC (Telangana)", "value": 3.9 },
          { "category": "State Finance Commission-VI (Rajasthan)", "value": 6.2 },
          { "category": "State Plan of Agriculture (Tripura)", "value": 0.1 },
          { "category": "State Plan of ARDD (Tripura)", "value": 0.1 },
          { "category": "State Plan of Fishery (Tripura)", "value": 0.1 },
          { "category": "State Plan of Horticulture (Tripura)", "value": 0.1 },
          { "category": "State Plan of PWD (Tripura)", "value": 0.1 },
          { "category": "Swachh Bharat Mission", "value": 7.1 },
          { "category": "Third State Finance Commission Manipur (Manipur)", "value": 1.3 },
          { "category": "Tourism Development (Himachal Pradesh)", "value": 1.0 },
          { "category": "Tripura Panchayat Development Fund (Tripura)", "value": 1.1 },
          { "category": "Vidhayak Kashetriya Vikas Nidhi Yojna (Himachal Pradesh)", "value": 1.5 },
          { "category": "Vidhayak Nidhi (Madhya Pradesh)", "value": 2.0 },
          { "category": "Vikas Me Jan Sehyog (Himachal Pradesh)", "value": 0.8 },
          { "category": "Zila Panchayat Vikas Nidhi (Chhattisgarh)", "value": 0.3 }
        ]
      },
      {
        "financialYear": "2025-2026",
        "stateCode": "9",
        "districtCode": "118",
        "chartId": "LowCost/NoCostActivities",
        "chartType": "Low Cost / No Cost Activities",
        "data": [
          { "category": "VPRP Beneficiaries", "value": 59.0 },
          { "category": "Community Service", "value": 16.3 },
          { "category": "Beneficiaries", "value": 13.5 },
          { "category": "Training/Capacity Building", "value": 11.3 }
        ]
      },
      {
        "financialYear": "2025-2026",
        "stateCode": "9",
        "districtCode": "118",
        "chartId": "Non-AssetBasedActivities",
        "chartType": "Non-Asset Based Activities",
        "data": [
          { "category": "Operational", "value": 40.0 },
          { "category": "Community Service", "value": 34.2 },
          { "category": "Training/Capacity Building", "value": 25.9 }
        ]
      }
    ]    
  }
}
