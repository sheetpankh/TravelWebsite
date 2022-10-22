import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }

  checkAuthentication():string | null {
    return sessionStorage.getItem('loggedInuser')
  }

  getuserDetails(){
    return this.http.get ('http://localhost:3000/users')
  }
}
