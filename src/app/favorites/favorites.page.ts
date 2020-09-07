import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  products: Observable<any>;
  constructor(private productService :ProductService) { }

  ngOnInit() {
    // Get the favorite products
    this.productService.getFavoriteProducts(1).subscribe(result => {
      this.products = result;
      console.log(this.products);      
    });
  }
  ionViewWillEnter() {
    // Get the favorite products
    this.productService.getFavoriteProducts(1).subscribe(result => {
      this.products = result;
      console.log(this.products);      
    });
  }

}
