import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinyearService {

  constructor() { }


  getFinYr(){
    return ['2025-2026', '2024-2025', '2023-2024', '2022-2023'];
  }
}
