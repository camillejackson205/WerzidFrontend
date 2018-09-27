import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api_Url } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient ) { }

  getTransactions(){
    console.log(localStorage);
    return this.http.get(`${Api_Url}/api/Transaction`, {headers: this.getHeaders() });
  }

  private getHeaders(){
    var path: string;
    path = `Bearer ${localStorage.getItem('id_token')}`;
    console.log(path);
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    // return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
