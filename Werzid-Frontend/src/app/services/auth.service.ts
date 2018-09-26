import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../models/token';

const Api_Url = "http://localhost:50801";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  showUp() {
    console.log("here");
  }

  register(registerData) {
    return this.http.post(`${Api_Url}/api/account/register`, registerData);
  }

  login(loginInfo) {
    const str =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this.http.post(`${Api_Url}/Token`, str).subscribe((token: Token) => { localStorage.setItem('id_token', token.access_token) });
  }
}
