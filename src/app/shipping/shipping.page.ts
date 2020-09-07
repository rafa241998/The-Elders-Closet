import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalService } from "../services/global.service";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.page.html',
  styleUrls: ['./shipping.page.scss'],
})
export class ShippingPage implements OnInit {

  addresses: Observable<any>;
  selectedAddress = 0;
  shipping = 0;
  constructor(private addressService :AddressService, private router: Router, public global: GlobalService) { }

  ngOnInit() {
    //Get elements of the cart
    this.addressService.getUserAddresses(1).subscribe(result => {
         this.addresses = result
         this.shipping = 0;
    });
  }
  selectAddress(id){
    this.selectedAddress = id;
  }
  selectShipping(type){
    if(type == "free"){
      this.shipping = 0;
    }else{
      this.shipping = 3.95;
    }
  }
  goToAddAddress(){
    this.router.navigateByUrl("/tabs/add-address");
  }
  goToPayment(){
    
    this.global.addressId = this.selectedAddress;
    this.global.shipping = this.shipping;
    console.log(this.global.addressId);
    console.log(this.global.shipping);
    this.router.navigateByUrl("/tabs/payment");
  }
  

}

