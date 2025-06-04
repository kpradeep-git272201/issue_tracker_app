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
        value: "Uttar Pradesh"
      },
      {
        code: 10,
        value: "Bihar"
      },
      {
        code: 28,
        value: "Andra Pradesh"
      },
    ]
  }
}