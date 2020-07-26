import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategoryList(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/categories/'+ id + '/products');
  }
  getProductImage(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products/'+ id + '/image');
  }
}
