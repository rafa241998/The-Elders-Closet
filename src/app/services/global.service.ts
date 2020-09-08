import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public cartItems: number;
  public addressId: number;
  public shipping: number;
  public loggedUser: number;  
  public api_token: string;
  constructor() { }
}
