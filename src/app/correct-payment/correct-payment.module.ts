import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectPaymentPageRoutingModule } from './correct-payment-routing.module';

import { CorrectPaymentPage } from './correct-payment.page';
import {ComponentsModule} from '../components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrectPaymentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CorrectPaymentPage]
})
export class CorrectPaymentPageModule {}
