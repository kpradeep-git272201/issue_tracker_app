import { Routes } from '@angular/router';
import { LandingComponent } from './public/components/landing/landing.component';
import { LoginComponent } from './auth/login/login.component';


export function getPrerenderParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}
export const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: '', component: LandingComponent },
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'restricted',
    loadChildren: () =>
      import('./restricted/restricted.module').then((m) => m.RestrictedModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];
