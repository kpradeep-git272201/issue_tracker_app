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


  setFilteredData(selectedData:any) {
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



  getAppList(){
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
  
  
}

