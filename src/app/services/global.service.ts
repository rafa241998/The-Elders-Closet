import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public cartItems: number; //Número de items en el carro 
  public addressId: number; //Dirección a la que se hace el pedido
  public shipping: number; //Precio del envio
  public loggedUser: number;  //Usuario logueado actual
  public api_token: string; //Token de sesión
  constructor() { }
}
