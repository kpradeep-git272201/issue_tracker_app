import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
      if (this.isBrowser() && localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedInSubject.next(true);
    }
  }
  
  
  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
  login(username: string, password: string): boolean {
    // Temporary static login check (replace with API in future)
    if (this.isBrowser() && username === 'Demo' && password === 'Demo@123') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
        this.isLoggedInSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
 if (this.isBrowser()) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      this.isLoggedInSubject.next(false);
    }
  }

  isAuthenticated(): boolean {
 if (this.isBrowser()) {
      return localStorage.getItem('isLoggedIn') === 'true';
    }
    return false;
  }
}
