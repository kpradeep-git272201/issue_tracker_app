import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenubarItemsService {

  constructor() { }

  getPanelItems() {
    return [
      {
        title: 'Meri Panchayat',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },
      {
        title: 'Profile Management',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/profile-management/add'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },
      {
        title: 'PESA Profiler',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },
      {
        title: 'Funds / Resource Envelope',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },

      {
        title: 'Panchayat Development Plan',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },

      {
        title: 'Works/Progress Management',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },
      {
        title: 'Bank Account Management',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },
      {
        title: 'Master Data Management',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },

      {
        title: 'Vendors Management',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },

      {
        title: 'Voucher/E-Payment Management',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },
      {
        title: 'Accounting Management',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },
      {
        title: 'Assets Register',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },
      {
        title: 'mActionSoft',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },
      {
        title: 'Panchayat Window',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },

      {
        title: 'Weather Forecast',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },

      {
        title: 'Internet Connection',
        icon: 'SidebarIcon',
        options: [
          {
            label: 'Add',
            icon: 'AddIcon',
            route: '/'
          },
          {
            label: 'View',
            icon: 'Visibility',
            route: '/'
          }
        ]
      },
    ];
  }


}

