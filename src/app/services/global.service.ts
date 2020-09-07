import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public cartItems: number;
  public addressId: number;
  public shipping: number;  
  constructor() { }
}
