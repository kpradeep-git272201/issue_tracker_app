import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActivityListService {
  constructor() {}

  getActivityList() {
    return {
      filterName: 'Activities',
      filterData: [
        { code: 71, value: 'Activity Created' },
        { code: 72, value: 'Activity Pending for Inclusion' },
        { code: 73, value: 'Activity included in plan' },
        { code: 74, value: 'Activity Approved' },
        { code: 180, value: 'WORK_ABANDONED' },
        { code: 179, value: 'WORK_SUSPENDED' },
        { code: 178, value: 'WORK_COMPLETED' },
        { code: 176, value: 'WORK_ONGOING' },
        { code: 174, value: 'UNDER_APPROVAL' }
      ]
    };
  }
}
