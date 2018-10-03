import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Api_Url } from '../../environments/environment.prod';
import { Product } from '../models/Product';

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

  logOut() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    this.http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeader() });
    this.router.navigate(['/login']);
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${Api_Url}/Products`, product, { headers: this.setHeader()});
  }
}
