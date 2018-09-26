import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api_Url } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  showUp(){
    console.log("here");
  }

  register(registerData){
   return this.http.post(`${Api_Url}/api/account/register`, registerData);
  }

  login(loginInfo){
    const str = 
    `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this.http.post(`${Api_Url}/token`, str)
  }
}
