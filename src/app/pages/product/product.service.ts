import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Computer} from "./model/computer";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private readonly http: HttpClient) {
  }
  getComputers(page: number, size: number): Observable<Computer[]> {
    const params = new HttpParams()
        .set('page', page)
        .set('size', size)
    return this.http.get<Computer[]>(`/api/v1/computers`, {params})
  }
}