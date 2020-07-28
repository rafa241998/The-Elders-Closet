import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  orders: Observable<any>;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    //Get user orders
    this.orderService.getOrders(1).subscribe(result => {
      this.orders = result;     
      console.log(this.orders);          
    }); 
  }

}
