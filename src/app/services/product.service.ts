import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from "./global.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  base_path = "http://127.0.0.1:8000/api/";
  constructor(private http: HttpClient,public global: GlobalService) { }

  getProductColors(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products/'+ id + '/productColors');
  }  
  getProduct(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products/'+ id );
  }
  getProductColorSizes(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/productColors/'+ id + '/colorSizes');
  }
  getFavoriteProducts(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/users/'+ this.global.loggedUser +'/favorites');
  }
  setFavoriteProduct(id): Observable<any> {  
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new HttpHeaderResponse({ headers: headers });    
    let postData = {
      "user_id": this.global.loggedUser,
      "product_id" : id
    }

    return this.http.post(this.base_path + 'users/'+ this.global.loggedUser + '/favorites/',postData,requestOptions);
  }
  checkFavoriteProduct(id): Observable<any> {  
    return this.http.get('http://127.0.0.1:8000/api/users/'+ this.global.loggedUser +'/favorites/'+ id);
  }
  deleteFavoriteProduct(id): Observable<any> {  
    return this.http.delete('http://127.0.0.1:8000/api/users/'+ this.global.loggedUser +'/favorites/'+ id);
  }
}
