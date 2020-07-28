import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router'

@Component({
  selector: 'app-correct-payment',
  templateUrl: './correct-payment.page.html',
  styleUrls: ['./correct-payment.page.scss'],
})
export class CorrectPaymentPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToHome(){
    this.router.navigateByUrl('/tabs/home')
  }
}
