import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import {User} from '../../models/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: any;

  constructor(private authService :AuthService,public router: Router,private fb: FormBuilder) { 
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],      
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      password_confirmation: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      phone_number: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
    });
  }

  ngOnInit() {
  }

  register(){
    if(this.form.value.password == this.form.value.password_confirmation){
      
      this.authService.register(this.form.value).subscribe((result)=>{
        console.log(result);
        this.router.navigateByUrl('/tabs/home');
      },
      (error) => {
        console.log("Catch error ")
      });
    }else{
      console.log("wtf men")
    }
    
  }
}
