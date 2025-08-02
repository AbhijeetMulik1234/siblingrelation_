import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MyComplexObject } from './Model/Object';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private objectSource = new BehaviorSubject<MyComplexObject | null>(null);

  //observable for components to subscribe to
  object$ = this.objectSource.asObservable();

  //update the complex object
  updateObject(obj: MyComplexObject) {
    this.objectSource.next(obj);
  }
}
