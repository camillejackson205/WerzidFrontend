import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = "http://localhost:50801";


@Injectable()

export class TransactionsService {

  constructor(private  http: HttpClient ) { }

  getTransactions(){
    return this.http.get(`${Api_Url}/Transactions`, {headers: this.getHeaders() });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer $${localStorage.getItem('id._token')}`);
  }
}
