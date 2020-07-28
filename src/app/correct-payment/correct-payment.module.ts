import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectPaymentPageRoutingModule } from './correct-payment-routing.module';

import { CorrectPaymentPage } from './correct-payment.page';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrectPaymentPageRoutingModule
  ],
  declarations: [CorrectPaymentPage,CustomHeaderComponent]
})
export class CorrectPaymentPageModule {}
