import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api_Url } from '../../environments/environment.prod';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get(`${Api_Url}api/Product`, { headers: this.getHeaders() });
}

private getHeaders() {
  return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
}

createProduct(product: Product) {
  return this._http.post(`${Api_Url}/Products`, product, { headers: this.getHeaders()});
}

}
