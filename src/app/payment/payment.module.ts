import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';
import {ComponentsModule} from '../components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule 
  ],
  declarations: [PaymentPage]
})
export class PaymentPageModule {}
