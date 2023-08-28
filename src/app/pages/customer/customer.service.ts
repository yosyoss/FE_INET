import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "./model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private readonly http: HttpClient) { }

  getCustomer(page: number, size: number): Observable<Customer[]> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<Customer[]>(`/api/v1/customers`, { params });
  }
}
