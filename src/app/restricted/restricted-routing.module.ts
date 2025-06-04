import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './layout/main/main.component';
import { MapBankBranchComponent } from './forms/banck-branch/map-bank-branch/map-bank-branch.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent, // layout with sidenav + router-outlet
    children: [
      { path: '', component: DashboardComponent },
      { path: 'mapBankBranch', component: MapBankBranchComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestrictedRoutingModule { }
