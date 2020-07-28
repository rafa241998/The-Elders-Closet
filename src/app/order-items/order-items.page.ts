import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.page.html',
  styleUrls: ['./order-items.page.scss'],
})
export class OrderItemsPage implements OnInit {

  orderItems: Observable<any>;
  constructor(private orderService: OrderService,private activatedRoute :ActivatedRoute) { }

  ngOnInit() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    //Get elements of the order
    this.orderService.getProductOrders(id).subscribe(result => {
      this.orderItems = result;     
      console.log(this.orderItems);           
    }); 
  }

}
