import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_path = "http://127.0.0.1:8000/api/";
  constructor(private http: HttpClient) { }
  //Login
  login(user): Observable<any> {  
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new HttpHeaderResponse({ headers: headers });    
    let postData = user;

    return this.http.post(this.base_path + 'login',postData,requestOptions);
  }
  //Register
  register(user): Observable<any> {  
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new HttpHeaderResponse({ headers: headers });    
    let postData = user;

    return this.http.post(this.base_path + 'register',postData,requestOptions);
  }
}
