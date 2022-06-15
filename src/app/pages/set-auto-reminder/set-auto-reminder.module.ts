import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetAutoReminderPageRoutingModule } from './set-auto-reminder-routing.module';

import { SetAutoReminderPage } from './set-auto-reminder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetAutoReminderPageRoutingModule
  ],
  declarations: [SetAutoReminderPage]
})
export class SetAutoReminderPageModule {}
