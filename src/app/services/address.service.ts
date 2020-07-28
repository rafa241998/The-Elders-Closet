import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  base_path = "http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient) { }

  getUserAddresses(id): Observable<any> {    
    return this.http.get(this.base_path + 'users/'+ id + '/addresses');
  }
}
