import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from "./global.service";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  base_path = "http://127.0.0.1:8000/api/";
  constructor(private http: HttpClient,public global: GlobalService) { }

  //Add the payment to the order
  setOrderPayment(payment): Observable<any> {  
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new HttpHeaderResponse({ headers: headers });    
    let postData = payment;

    return this.http.post(this.base_path + 'payments', postData, requestOptions);
  }
}
