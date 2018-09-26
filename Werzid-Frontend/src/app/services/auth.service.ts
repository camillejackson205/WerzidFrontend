import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const Api_Url = "http://localhost:50801";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(public http: HttpClient, private router: Router) { }

  showUp() {
    console.log("here");
  }

  register(registerData) {
    return this.http.post(`${Api_Url}/api/account/register`, registerData);
  }

  login(loginInfo) {
    const str =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this.http.post(`${Api_Url}/Token`, str).subscribe((token: Token) => {
      this.userInfo = token;
      console.log(token);
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this.router.navigate(['/']);
    });
  }
  
    currentUser(): Observable<Object> {
      if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }
  
      return this.http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeader() });
    }

  logOut(): Observable<Object> {
    localStorage.clear();
    this.isLoggedIn.next(false);

    return this.http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeader() });
    this.router.navigate(['/login']);
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
