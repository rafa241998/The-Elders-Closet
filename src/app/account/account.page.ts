import { Component, OnInit } from '@angular/core';
import { GlobalService } from "../services/global.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(public global: GlobalService, public router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.global.loggedUser = -1;
    this.global.api_token = "";
    this.global.cartItems = 0;
    this.global.addressId = -1;
    this.global.shipping = -1;
    
    this.router.navigateByUrl('/');
  }
}
