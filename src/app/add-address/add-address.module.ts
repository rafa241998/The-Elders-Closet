import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAddressPageRoutingModule } from './add-address-routing.module';

import { AddAddressPage } from './add-address.page';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAddressPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddAddressPage, CustomHeaderComponent]
})
export class AddAddressPageModule {}
