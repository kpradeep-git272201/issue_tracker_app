import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './layout/main/main.component';
import { MapBankBranchComponent } from './forms/banck-branch/map-bank-branch/map-bank-branch.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddBenificaryComponent } from './forms/vendors/add-benificary/add-benificary.component';
import { ModifyBenificaryComponent } from './forms/vendors/modify-benificary/modify-benificary.component';
import { AddBankAccountComponent } from './forms/bank/add-bank-account/add-bank-account.component';
import { ManageBankAccountComponent } from './forms/bank/manage-bank-account/manage-bank-account.component';
import { authGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent, // layout with sidenav + router-outlet
    children: [
      { path: '', component: DashboardComponent, canActivate: [authGuard]},
      { path: 'mapBankBranch', component: MapBankBranchComponent, canActivate: [authGuard] },
      { path: 'addBankAccount', component: AddBankAccountComponent, canActivate: [authGuard] },
      { path: 'getAddBenificary', component: AddBenificaryComponent, canActivate: [authGuard] },
      { path: 'manageBankAccount', component: ManageBankAccountComponent, canActivate: [authGuard] },
      { path: 'getModifyBenificary', component: ModifyBenificaryComponent, canActivate: [authGuard] },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestrictedRoutingModule { }
