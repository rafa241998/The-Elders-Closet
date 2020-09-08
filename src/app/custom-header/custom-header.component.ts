import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from "../services/global.service";
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {

  constructor( public navCtrl: NavController, public global: GlobalService, private cartService :CartService,private router: Router) { }

  ngOnInit() {
    
    //Get elements of the cart
    this.cartService.getUserCartQuantity().subscribe(result => {
      this.global.cartItems = result;     
      console.log(this.global.cartItems);      
    });
     
  }
  ionViewWillEnter() {
    //Get elements of the cart
    this.cartService.getUserCartQuantity().subscribe(result => {
      this.global.cartItems = result;     
      console.log(this.global.cartItems);      
    });
  }
  showHome() {
    this.router.navigateByUrl("/tabs/home");
  }
  openCart(){
    this.router.navigateByUrl("/tabs/cart");
  }

}
