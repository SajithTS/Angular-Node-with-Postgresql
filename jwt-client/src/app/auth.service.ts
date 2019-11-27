import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, Registration, LoginResponse } from './models/login.class';

import * as moment from 'moment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = 'http://localhost:3000/api/v1';
  constructor(private http:HttpClient) { }

  loginService(login:Login){
    return this.http.post<LoginResponse>(this.apiUrl+'/login',login);
  }

  getUserDetails(){
    return this.http.get(this.apiUrl + '/user');
  }

  registerService(reg:Registration){
    return this.http.post(this.apiUrl+'/register',reg);
  }

  getExpiration(){
    const expiration = JSON.parse(localStorage.getItem("expiresz_At"));
    return moment(expiration);
  }
}
