import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectPaymentPage } from './correct-payment.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectPaymentPageRoutingModule {}
