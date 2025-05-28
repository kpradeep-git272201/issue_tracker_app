import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovableListService {

  constructor() { }

  getMovableAndImmovable(){
    return{
      filterName:"Movable/Immovable",
      filterData:[
        {
          code: 1,
          value: "Movable"
        },
         {
          code: 2,
          value: "Immovable"
        }
      ]
    }
  }
}
