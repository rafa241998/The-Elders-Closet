import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from "./global.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  base_path = "http://127.0.0.1:8000/api/";
  constructor(private http: HttpClient, public global: GlobalService) { }
  
  getOrders(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/users/'+ this.global.loggedUser +'/orders');
  }

  getProductOrders(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/orders/'+ id +'/orderItems');
  }
  /*
  getUserCartItems(id): Observable<any> {    
    return this.http.get('cscs'+ 'users/'+ id + '/cart');
  }
  */

  //Create a new order for the products
  setNewOrder(order): Observable<any> {  
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new HttpHeaderResponse({ headers: headers });    
    //Set data
    let postData = order;

    return this.http.post(this.base_path + 'orders', postData, requestOptions);
  }
  //Insert OrderItems
  setOrderItems(orderItem): Observable<any> {  
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new HttpHeaderResponse({ headers: headers });   

    let postData = orderItem;

    return this.http.post(this.base_path + 'orderItems',postData,requestOptions);
  }


}
