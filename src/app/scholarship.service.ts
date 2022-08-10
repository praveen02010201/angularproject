
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {

  scholarshipId = "0";
  country = '';
  state = '';
  country1 = '';
  state1 = '';
  date = '';
  students = 0;
  name = '';
  aadharNo = '';

  baseUrl = 'http://localhost:8080/Scholar/scholarship';
 

  constructor(private http:HttpClient) {

   }

  newScholarship(scholarship: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, scholarship);
  }

  getScholarshipsList(): Observable<any> {
    //alert(source +" "+destination)
    //alert(`${this.baseUrl}/${source}/${destination}`);
    //alert("getflightlist");
    return this.http.get(`${this.baseUrl}`);
  }

  deleteScholarship(id: string): Observable<any> {
     
   
    alert("Deleted")
    let response = this.http.delete(`${this.baseUrl}/${id}`);
    response.subscribe((data) => {
      console.log(data);
    })

    return response;
  }

  getProductsList1(): Observable<any> {
    //alert(this.http.get(`${this.baseUrl}`));
    return this.http.get(`${this.baseUrl}`);
  }


  getScholarship(country: string, state: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${country}/${state}`);
  }

  getScholarshipDetails(id: string): Observable<any> {
    this.scholarshipId = id;
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateScholarship(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getScholarshipById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}



 /*getProductsList(): Observable<any> {
    //alert(this.http.get(`${this.baseUrl}`));
    return this.http.get(`${this.baseUrl}`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }*/