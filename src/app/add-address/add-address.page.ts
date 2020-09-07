import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {

  elForm: any;

  line1: string;
  line2: string;
  postal_code: number;
  city: string;
  country: string;
  phone_number: number;

  constructor(private fb: FormBuilder) { 
    this.elForm = this.fb.group({
      line1: ['', Validators.required],
      line2: [''],
      postal_code: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phone_number: ['', Validators.compose([Validators.required, Validators.minLength(9)])]
    });
  }

  ngOnInit() {
  }

}
