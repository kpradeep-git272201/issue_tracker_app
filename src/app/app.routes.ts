import { Routes } from '@angular/router';
import { LandingComponent } from './public/components/landing/landing.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent },
    {
      path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)

    },
    {
      path: 'restricted', loadChildren: () => import('./restricted/restricted.module').then(m => m.RestrictedModule)
    },
    {
      path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
  
];
