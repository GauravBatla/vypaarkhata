import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetAutoReminderPage } from './set-auto-reminder.page';

const routes: Routes = [
  {
    path: '',
    component: SetAutoReminderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetAutoReminderPageRoutingModule {}
