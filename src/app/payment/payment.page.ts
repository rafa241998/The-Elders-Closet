import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import {Router} from '@angular/router';
import { OrderService } from '../services/order.service';
import { CartService } from 'src/app/services/cart.service';
import { GlobalService } from "../services/global.service";
import { Order } from '../models/order';
import { CartItem } from '../models/cart-item';
import { OrderItem } from '../models/order-item';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  cartItems: CartItem[];
  cartItems1: CartItem[];
  orderItems: OrderItem[] = [];
  subTotal: number;

  elForm: any;
   

  constructor(private fb: FormBuilder, private router: Router, private orderService: OrderService, public global: GlobalService,private datePipe: DatePipe, private cartService :CartService) { 
    this.elForm = this.fb.group({
      holder: ['Alejandro Moreno', Validators.required],
      card: ['4436000123456789', Validators.compose([Validators.required, Validators.minLength(16)])],
      month: ['1', Validators.required],
      year: ['2020', Validators.required],
      cvv: ['123', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(3)])],      
    });
  }

  ngOnInit() {
  }
  
  doPayment(){
    let today = new Date();
    let todayFormat = this.datePipe.transform(today,"yyyy-MM-dd HH:mm:ss");    
    //Do real payment    

    //Get items from the cart    
    this.cartService.getUserCartItems().subscribe(result => {
      this.cartItems = result;         
      console.log(this.cartItems);   
      //Calcular el precio total
      this.subTotal = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)   

      //Create a new order
      let order: Order={      
        "user_id": this.global.loggedUser,
        "address_id": this.global.addressId,
        "status": "paid",
        "subTotal": this.subTotal,
        "shipping": this.global.shipping,
        "total": this.subTotal+this.global.shipping,
        "details": "null",
        "orderDate": todayFormat,
      }
      this.orderService.setNewOrder(order).subscribe(result => {          
        
        //Cast cartItems to orderItems
        for (let item of this.cartItems) {
          let orderItem: OrderItem={
            "order_id": result.id,
            "color_size_id": item.color_size_id,
            "quantity": item.quantity,
            "price": item.price,
          }          
          this.orderItems.push(orderItem);//Los agrego al nuevo array          
        }   
        //Delete items from the cart
        this.cartService.deleteCartItems().subscribe(result => {
          //console.log(result);
          this.global.cartItems = 0;
        });
        console.log(this.orderItems);
        //Insert items into the order
        for (let orderItem of this.orderItems) {
          this.orderService.setOrderItems(orderItem).subscribe(result => { 
            //console.log(result);
          });
        } 
      });      
      
    });
    
    

    this.router.navigateByUrl('/tabs/correct-payment');
  }
}
