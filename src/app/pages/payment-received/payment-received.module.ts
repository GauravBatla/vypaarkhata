import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentReceivedPageRoutingModule } from './payment-received-routing.module';

import { PaymentReceivedPage } from './payment-received.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentReceivedPageRoutingModule
  ],
  declarations: [PaymentReceivedPage]
})
export class PaymentReceivedPageModule {}
