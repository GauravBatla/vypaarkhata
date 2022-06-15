import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceDetailsPage } from './invoice-details.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceDetailsPageRoutingModule {}
