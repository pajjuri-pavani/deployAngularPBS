import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePassbookComponent } from './update-passbook/update-passbook.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { ResponseComponent } from './response/response.component';


const routes: Routes = [
  {path:'updatePassbook',component:UpdatePassbookComponent},
  {path:'acocuntSummary',component:AccountSummaryComponent},
  {path:'response',component:ResponseComponent},
  {path:'', redirectTo: '/updatePassbook', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
