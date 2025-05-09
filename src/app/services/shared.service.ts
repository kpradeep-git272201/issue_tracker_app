import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dataFilter = new BehaviorSubject<any>(null);
  currentDataFilter = this.dataFilter.asObservable();
  constructor() { }

  updateDataFilter(data: any) {
    this.dataFilter.next(data);
  }
}
