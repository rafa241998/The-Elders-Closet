import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { ColorSize } from '../models/color-size';
import { GlobalService } from "../services/global.service";



@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  sizes: ColorSize[] ;
  colors: Observable<any> ; 
  product: Product ;
  selectedColor: number = 0;
  selectedSize: number;
  addItem: boolean;
  constructor(private activatedRoute :ActivatedRoute, private productService :ProductService, private cartService :CartService,public global: GlobalService) { }

  ngOnInit() {    
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    // Get the product data
    this.productService.getProduct(id).subscribe(result => {
      this.product = result;      
      console.log(this.product);      
    });
    // Get the colors of the product
    this.productService.getProductColors(id).subscribe(result => {
      this.colors = result;
      this.selectColor(this.colors[0].color.id);
      console.log(this.colors);      
    });    

  }
  selectColor(id: number){
    this.selectedColor = id;
    this.selectedSize = -1;
    this.addItem = false;
    console.log(id); 
    //Get the sizes for the color
    this.productService.getProductColorSizes(id).subscribe(result => {
      this.sizes = result;      
      console.log(this.sizes);      
    }); 
  }
  selectSize(id: number){
    this.addItem = false;
    this.selectedSize = id;     
  }
  addToCart(){
    this.addItem = true;
    if(this.selectedSize != -1){
      let cartItem: CartItem={
        "cart_id": 1,
        "color_size_id": this.selectedSize,
        "price": this.product.price,
        "quantity": 1
      }
      this.cartService.setUserCartItems(1,cartItem).subscribe(result => {  
        this.global.cartItems++;    
        console.log(result);      
      }, (err) => {
        console.log(err);
      });
    }
    
  }
  goToCart(id:number){
    this.addItem = true;
  }

}
