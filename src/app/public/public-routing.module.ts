import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { PubDashboardComponent } from './components/pub-dashboard/pub-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,

    children: [
      { path: '', redirectTo: 'dashboard/:dashboardId', pathMatch: 'full' },
      { 
        path: 'dashboard/:dashboardId', 
        component: PubDashboardComponent ,
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
