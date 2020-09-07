import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from "./global.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  base_path = "http://127.0.0.1:8000/api/";
  constructor(private http: HttpClient,public global: GlobalService) { }
  
  getUserCartItems(id): Observable<any> {    
    return this.http.get(this.base_path + 'users/'+ id + '/cart');
  }   
  setUserCartItems(id, cartItems): Observable<any> {  
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new HttpHeaderResponse({ headers: headers });    
    let postData = cartItems;

    return this.http.post(this.base_path + 'users/'+ id + '/cart',postData,requestOptions);
  }  
  //Delete item from cart  
  deleteItem(id) : Observable<any>{
    return this.http
      .delete(this.base_path + 'cartItems/' + id);      
  }
  //Delete all cart items
  deleteCartItems(userId) : Observable<any>{
    return this.http
      .delete(this.base_path + 'users/' + userId +'/cart/cartItems');      
  }
  getUserCartQuantity(id): Observable<any> {    
    return this.http.get(this.base_path + 'users/'+ id + '/cart/quantity');
  } 
}
