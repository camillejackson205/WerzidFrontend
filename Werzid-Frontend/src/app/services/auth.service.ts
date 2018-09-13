import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const Api_Url = "http://localhost:50801";

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

}
