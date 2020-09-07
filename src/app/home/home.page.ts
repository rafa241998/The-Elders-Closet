import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  showSearch() {
    this.router.navigateByUrl("/tabs/search");
  }
  showFavorites() {
    this.router.navigateByUrl("/tabs/favorites");
  }
  showOrders() {
    this.router.navigateByUrl("/tabs/orders");
  }
  showCart() {
    this.router.navigateByUrl("/tabs/cart");
  }
  showAccount() {
    this.router.navigateByUrl("/tabs/account");
  }
}
