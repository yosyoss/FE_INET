import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserResponseWrapper} from "./model/user-response.model";
import {UserRequest} from "./model/user-request.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  public login(data: UserRequest): Observable<UserResponseWrapper> {
    return this.http.post<UserResponseWrapper>('api/v1/auth/login', data)
  }

  public register(data: UserRequest): Observable<UserResponseWrapper> {
    return this.http.post<UserResponseWrapper>('api/v1/auth/register', data)
  }

  logout() {
    sessionStorage.removeItem('token');
  }
}
