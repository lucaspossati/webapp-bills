import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary/salary.component';
import { BillsComponent } from './bills.component';
import { BillsRoutingModule } from './bills.routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbTreeGridModule,
  NbUserModule,
} from '@nebular/theme';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ExpensesInMonthComponent } from './expenses-in-month/expenses-in-month.component';
import { AuthGuardService } from '../../auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../security/auth.interceptor';


@NgModule({
  providers: [
    AuthGuardService
  ],
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    CommonModule,
    ngFormsModule,
    BillsRoutingModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbTreeGridModule
  ],
  declarations: [
    SalaryComponent,
    ExpensesInMonthComponent,
    BillsComponent
  ],
  
})
export class BillsModule { }
