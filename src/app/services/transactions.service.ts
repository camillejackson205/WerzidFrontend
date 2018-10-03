import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api_Url } from '../../environments/environment.prod';
import { Transaction } from '../models/transactions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient ) { }

  getTransactions(){
    return this.http.get(`${Api_Url}api/Transaction`, {headers: this.getHeaders() });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createTransaction(transaction: Transaction) {
    return this.http.post(`${Api_Url}api/Transaction`, transaction, {headers: this.getHeaders()});
  }

  getTransaction(id: string) {
   return this.http.get(`${Api_Url}api/Transaction/${id}`, {headers: this.getHeaders()});
  }

  updateTransaction(transaction: Transaction) {
    return this.http.put(`${Api_Url}api/Transaction`, transaction, {headers: this.getHeaders()});
   }

   deleteTransaction(id: number) {
    return this.http.delete(`${Api_Url}api/Transaction/${id}`, {headers: this.getHeaders()});
   }
}
