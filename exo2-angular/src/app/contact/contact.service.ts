import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private lastContactSubject = new BehaviorSubject<any>(null);
  lastContact$ = this.lastContactSubject.asObservable();

  setContactData(data: any): void {
    console.log('setContactData appelé avec :', data);
    this.lastContactSubject.next(data);
  }

  getContactData(): any {
    console.log('getContactData appelé.');
    return this.lastContactSubject.value;
  }
}


