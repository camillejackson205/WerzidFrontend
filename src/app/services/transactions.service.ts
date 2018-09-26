import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api_Url } from '../../environments/environment.prod';
import { transaction } from '../models/Transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private  http: HttpClient ) { }

  getTransactions(){
    return this.http.get(`${Api_Url}/Transactions`, {headers: this.getHeaders() });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer $${localStorage.getItem('id._token')}`);
  }

  createTransaction(transaction: transaction){
    return this.http.post(`${Api_Url}/Transactions`, transaction, { headers: this.getHeaders()});
  }
}
