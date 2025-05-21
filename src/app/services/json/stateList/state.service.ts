import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  getStateList(){
    return [
      {
        code: 9,
        value: "Andra Pradesh"
      },
      {
        code: 10,
        value: "Bihar"
      },
      {
        code: 28,
        value: "Uttar Pradesh"
      }
    ]
  }
}
