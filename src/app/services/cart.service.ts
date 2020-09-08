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
  
  getUserCartItems(): Observable<any> {    
    return this.http.get(this.base_path + 'users/'+ this.global.loggedUser + '/cart');
  }   
  setUserCartItems(cartItems): Observable<any> {  
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new HttpHeaderResponse({ headers: headers });    
    let postData = cartItems;

    return this.http.post(this.base_path + 'users/'+ this.global.loggedUser + '/cart',postData,requestOptions);
  }  
  //Delete item from cart  
  deleteItem(id) : Observable<any>{
    return this.http
      .delete(this.base_path + 'cartItems/' + id);      
  }
  //Delete all cart items
  deleteCartItems() : Observable<any>{
    return this.http
      .delete(this.base_path + 'users/' + this.global.loggedUser +'/cart/cartItems');      
  }
  getUserCartQuantity(): Observable<any> {    
    return this.http.get(this.base_path + 'users/'+ this.global.loggedUser + '/cart/quantity');
  } 
  //Add 1 item
  addItemCart(id): Observable<any> {    
    return this.http.get(this.base_path + 'cartItems/'+ id + '/add');
  } 
  //Remove 1 item
  removeItemCart(id): Observable<any> {    
    return this.http.get(this.base_path + 'cartItems/'+ id + '/remove');
  }
}
