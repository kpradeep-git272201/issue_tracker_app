import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    {
      path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule),

    },
    {
      path: 'restricted', loadChildren: () => import('./restricted/restricted.module').then(m => m.RestrictedModule)
    },
    {
      path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
  
];
