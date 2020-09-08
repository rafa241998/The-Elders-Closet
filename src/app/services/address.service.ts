import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from "./global.service";

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  base_path = "http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient,public global: GlobalService) {}

  getUserAddresses(): Observable<any> {    
    return this.http.get(this.base_path + 'users/'+ this.global.loggedUser + '/addresses');
  }
  //Add a new address
  setAddress(address): Observable<any> {  
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new HttpHeaderResponse({ headers: headers });    
    let postData = address;

    return this.http.post(this.base_path + 'users/'+ this.global.loggedUser + '/addresses',postData,requestOptions);
  }
  //Delete item from cart  
  deleteAddress(id) : Observable<any>{
    return this.http
      .delete(this.base_path + 'addresses/' + id);      
  }
}
