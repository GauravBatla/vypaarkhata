import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersPageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./pages/invoice/invoice.module').then(m => m.InvoicePageModule)
  },
  {
    path: 'payment-received',
    loadChildren: () => import('./pages/payment-received/payment-received.module').then(m => m.PaymentReceivedPageModule)
  },
  {
    path: 'vendors',
    loadChildren: () => import('./pages/vendors/vendors.module').then(m => m.VendorsPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./pages/customer/customer.module').then(m => m.CustomerPageModule)
  },
  {
    path: 'customer-details',
    loadChildren: () => import('./pages/customer-details/customer-details.module').then(m => m.CustomerDetailsPageModule)
  },
  {
    path: 'payment-done',
    loadChildren: () => import('./pages/payment-done/payment-done.module').then(m => m.PaymentDonePageModule)
  },
  {
    path: 'set-auto-reminder',
    loadChildren: () => import('./pages/set-auto-reminder/set-auto-reminder.module').then(m => m.SetAutoReminderPageModule)
  },
  {
    path: 'bills',
    loadChildren: () => import('./pages/bills/bills.module').then(m => m.BillsPageModule)
  },
  {
    path: 'invoice-details',
    loadChildren: () => import('./pages/invoice-details/invoice-details.module').then(m => m.InvoiceDetailsPageModule)
  },
  {
    path: 'vendors-details',
    loadChildren: () => import('./pages/vendors-details/vendors-details.module').then(m => m.VendorsDetailsPageModule)
  },
  {
    path: 'create-invoice',
    loadChildren: () => import('./pages/create-invoice/create-invoice.module').then(m => m.CreateInvoicePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
