import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  elForm: any;

  holder: string;
  card: number;
  month: string;
  year: number;
  cvv: number;  

  constructor(private fb: FormBuilder, private router: Router) { 
    this.elForm = this.fb.group({
      holder: ['', Validators.required],
      card: ['', Validators.compose([Validators.required, Validators.minLength(16)])],
      month: ['', Validators.required],
      year: ['', Validators.required],
      cvv: ['', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(3)])],      
    });
  }

  ngOnInit() {
  }
  doPayment(){
    this.router.navigateByUrl('/tabs/correct-payment');
  }
}
