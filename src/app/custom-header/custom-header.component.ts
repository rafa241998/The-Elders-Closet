import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from "../services/global.service";
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {

  constructor( public navCtrl: NavController, public global: GlobalService, private cartService :CartService) { }

  ngOnInit() {
    
    //Get elements of the cart
    this.cartService.getUserCartItems(1).subscribe(result => {
      this.global.cartItems = result.length;     
      console.log(this.global.cartItems);      
    });
  }

}
