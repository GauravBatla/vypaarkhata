import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorsDetailsPage } from './vendors-details.page';

const routes: Routes = [
  {
    path: '',
    component: VendorsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorsDetailsPageRoutingModule {}
