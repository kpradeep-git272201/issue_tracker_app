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


    ];
  }


}

