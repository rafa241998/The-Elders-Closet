import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductColors(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products/'+ id + '/productColors');
  }  
  getProduct(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products/'+ id );
  }
  getProductColorSizes(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/productColors/'+ id + '/sizes');
  }
  getFavoriteProducts(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/users/'+ id +'/favorites');
  }
}
