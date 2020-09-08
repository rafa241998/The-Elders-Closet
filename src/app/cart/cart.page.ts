import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../models/cart-item';
import { GlobalService } from "../services/global.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItems: CartItem[];
  finalValue: number;
  constructor(private cartService :CartService,public global: GlobalService, public router: Router) { }
  
  ngOnInit() {
    //Get elements of the cart
    this.cartService.getUserCartItems().subscribe(result => {
      this.cartItems = result;     
      console.log(this.cartItems);   
      //Calcular el precio total
      this.finalValue = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)   
    });    
    
  }
  ionViewWillEnter() {
    //Get elements of the cart
    this.cartService.getUserCartItems().subscribe(result => {
      this.cartItems = result;     
      console.log(this.cartItems);   
      //Calcular el precio total
      this.finalValue = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)   
    });
  }
  addItem(item){
    item.quantity=item.quantity+1;
    this.global.cartItems++;
    this.cartService.addItemCart(item.id).subscribe(result => {            
    }); 
    //Calcular el precio total
    this.finalValue = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }
  deleteItem(item){
    item.quantity=item.quantity-1;
    this.global.cartItems--;
    this.cartService.removeItemCart(item.id).subscribe(result => {            
    });

    if(item.quantity == 0){
      //Delete item
      this.cartService.deleteItem(item.id).subscribe(result => {           
        console.log(result);     
        //Reload items
        this.cartService.getUserCartItems().subscribe(result => {
          this.cartItems = result;     
          console.log(this.cartItems);      
        }); 
      });      
    }
    //Calcular el precio total
    this.finalValue = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }
  goToShipping(){
    this.router.navigateByUrl('/tabs/shipping');
  }

}
