import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  country1 = '';
  state1 = '';
  user = null;
  isAdmin = false;

  private baseUrl = 'http://localhost:8080/Scholar';

  constructor(private http:HttpClient) { }

  getDealersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  login(user:any):Observable<any>
  {
    return this.http.post(`http://localhost:8080/Scholar/user`,user)
  }

  loginAdmin(admin:any):Observable<any>
  {
    return this.http.post(`http://localhost:8080/Scholar/admin`,admin)
  }

  isUserLoggedIn() {
    return sessionStorage.getItem("username")!= null;
  }

  saveUserLoggedIn(user: any) {
    this.user = user;
  }

  getLoggedInUser() {
    return this.user;
  }

  isAdminLoggedIn() {
    let admin = "edhapraveen@gmail.com";
    console.log(!(admin === null))
    return !(admin === null)
  }
 
  logOut() {
    sessionStorage.removeItem('username')
  }

  saveDealer(user: Object): Observable<Object> {
    return this.http.post(`http://localhost:8080/Scholar/user`, user);
  }
}
