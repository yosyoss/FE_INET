import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  setLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  getLoading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }
}
