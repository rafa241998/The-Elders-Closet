import { Component, OnInit, ViewChildren } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalService } from "../services/global.service";
import { IonRadioGroup } from '@ionic/angular';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.page.html',
  styleUrls: ['./shipping.page.scss'],
})
export class ShippingPage implements OnInit {

  addresses: Observable<any>;
  selectedAddress = 0;
  shipping = 0;
  @ViewChildren(IonRadioGroup) radioGroup: IonRadioGroup;

  constructor(private addressService :AddressService, private router: Router, public global: GlobalService) { }

  ngOnInit() {
    //Get Get addresses
    this.addressService.getUserAddresses().subscribe(result => {
         this.addresses = result
         this.shipping = 0;
    });
  }
  ionViewWillEnter() {
    //Get addresses
    this.addressService.getUserAddresses().subscribe(result => {
      this.addresses = result
      this.shipping = 0;
    });
  }  
  selectAddress(id){
    this.selectedAddress = id;
  }
  deleteAddress(id){
    //Delete address
    this.addressService.deleteAddress(id).subscribe(result => { 
      //Get addresses
      this.addressService.getUserAddresses().subscribe(result => {
        this.addresses = result
        this.shipping = 0;
      });     
    });
    
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
    this.selectedAddress = 0;    
    this.router.navigateByUrl("/tabs/payment");
  }
  

}

