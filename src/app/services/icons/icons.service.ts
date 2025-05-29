import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor() { }

  getIconName(){
    return [
      'Administration',
      'ComparisonIcon',
      'CompletedProjects',
      'Departments',
      'Development',
      'DotVertical',
      'Edit',
      'emblemofindian',
      'export',
      'eyesclosed',
      'Filter',
      'Geographical',
      'house',
      'indian',
      'lock',
      'loginperson',
      'Notification',
      'Projects',
      'ProjectSTATUS',
      'Remaining',
      'Report',
      'rightdirectionarow',
      'Settings',
      'Time',
      'TotalRequests',
      'unlocked',
      'user',
      'View',
      'dashboard',
      'Currency',
      'HeaderIcon',
      'InidanFlag',
      'OpenInNew',
      'Fushia',
      'Language',
      'LoginUser',
      'Devider'
    ];
  }
}
