import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { GlobalService } from "../../services/global.service";
import { CartService } from "../../services/cart.service";
import { User } from "../../models/user";
import { ViewChild } from '@angular/core'
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('form', {static:false}) LoginForm: NgForm;

  constructor(private authService :AuthService,public router: Router, public global: GlobalService, public cartService: CartService) { }
  errorLogin: boolean = false;
  user: User;
  email:string="";
  password:string="";

  ngOnInit() {
  }

  login(form){
    this.authService.login(form.value).subscribe((result)=>{  
      this.LoginForm.reset();     
      this.user = result.data;         
      this.global.loggedUser = this.user.id;
      this.global.api_token = this.user.api_token;
      //Get elements of the cart
      this.cartService.getUserCartQuantity().subscribe(result => {
        this.global.cartItems = result;     
        this.router.navigateByUrl('/tabs/home');
      });            
      
    },
    (error) => {
      this.errorLogin = true;
    });
  }

}
