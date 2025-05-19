// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { CanActivate, CanActivateFn, UrlTree } from '@angular/router';
import { AuthService } from '../services/planning/auth.service';
import { Router } from 'express';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    
    if (isPlatformBrowser(this.platformId) && this.authService.isAuthenticated()) {
      return true;
    } else {
      // Redirect to home or login
      return false; //this.router.parseUrl('/');
    }
  }
}
