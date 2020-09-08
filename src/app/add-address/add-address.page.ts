import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AddressService } from '../services/address.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, public addressService: AddressService,public router: Router) { 
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
  addAddress(){
    this.addressService.setAddress(this.elForm.value).subscribe((result)=>{
      console.log(result);
      this.router.navigateByUrl('/tabs/shipping');
    },
    (error) => {
      console.log("Catch error ")
    });
  }

}
