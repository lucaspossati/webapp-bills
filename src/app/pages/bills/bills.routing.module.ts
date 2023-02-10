import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './bills.component';
import { ExpensesInMonthComponent } from './expenses-in-month/expenses-in-month.component';
import { LoginComponent } from './login/login.component';
import { SalaryComponent } from './salary/salary.component';

const routes: Routes = [
  {
    path: '',
    component: BillsComponent,
    children: [
      {
        path: 'salary',
        component: SalaryComponent,
      },
      {
        path: 'expenses-in-month',
        component: ExpensesInMonthComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class BillsRoutingModule {
}

