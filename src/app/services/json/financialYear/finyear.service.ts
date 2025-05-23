import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinyearService {

  constructor() { }


  getFinYr() {
    return [
      { name: '2025-2026', code: '2025-2026' },
      { name: '2024-2025', code: '2024-2025' },
      { name: '2022-2023', code: '2022-2023' },
      { name: '2021-2023', code: '2022-2022' },
    ];
  }
  

}
