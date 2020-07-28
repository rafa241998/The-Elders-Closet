import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShippingPageRoutingModule } from './shipping-routing.module';

import { ShippingPage } from './shipping.page';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShippingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShippingPage, CustomHeaderComponent]
})
export class ShippingPageModule {}
