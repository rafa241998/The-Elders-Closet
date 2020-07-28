import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.page.html',
  styleUrls: ['./shipping.page.scss'],
})
export class ShippingPage implements OnInit {

  addresses: Observable<any>;
  selectedAddress = 0;
  constructor(private addressService :AddressService, private router: Router) { }

  ngOnInit() {
    //Get elements of the cart
    this.addressService.getUserAddresses(1).subscribe(result => {
         this.addresses = result
    });
  }
  selectAddress(id){
    this.selectedAddress = id;
  }
  goToAddAddress(){
    this.router.navigateByUrl("/tabs/add-address");
  }
  goToPayment(){
    this.router.navigateByUrl("/tabs/payment");
  }
  

}
