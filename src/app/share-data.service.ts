import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private references: any[] = [];
  private referencesSubject = new BehaviorSubject<any[]>(this.references);
  
  references$: Observable<any[]> = this.referencesSubject.asObservable();

  constructor() {}

  addReference(reference: any) {
    this.references.push(reference);
    this.referencesSubject.next(this.references);
  }
}