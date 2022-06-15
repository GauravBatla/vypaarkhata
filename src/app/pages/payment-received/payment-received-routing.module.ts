import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentReceivedPage } from './payment-received.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentReceivedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentReceivedPageRoutingModule {}
