import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorsDetailsPageRoutingModule } from './vendors-details-routing.module';

import { VendorsDetailsPage } from './vendors-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorsDetailsPageRoutingModule
  ],
  declarations: [VendorsDetailsPage]
})
export class VendorsDetailsPageModule {}
