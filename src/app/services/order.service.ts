import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  
  getProduct(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products/'+ id );
  }
}
