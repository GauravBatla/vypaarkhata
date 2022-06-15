import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateInvoicePage } from './create-invoice.page';

const routes: Routes = [
  {
    path: '',
    component: CreateInvoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateInvoicePageRoutingModule {}
