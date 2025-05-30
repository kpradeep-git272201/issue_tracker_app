import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();
  userJson: any = [
    {
      userName: 'ikari',
      password: 'Admin@123',
      data: {
        state: 'Uttar Pradesh',
        zp: 'Aligarh',
        bp: 'Dhanipur',
        gp: 'Ikari(43650)',
        name: 'PUSHPENDRA CHAUDHARY',
        designation: 'GPA',
        email: 'Nikhil1989.2011.com',
        mobile: '8595825423',
        role: 'VADM',
      },
    },
    {
      userName: 'ankhiya',
      password: 'Admin@123',
      data: {
        state: 'Uttar Pradesh',
        zp: 'Aligarh',
        bp: 'Dhanipur',
        gp: 'Ikari(43650)',
        name: 'ANKHIYA',
        designation: 'GPA',
        email: 'Nikhil1989.2011.com',
        mobile: '8595825423',
        role: 'CHECKER',
      },
    },
  ];
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
    let isLogged = false;
    this.userJson.forEach((elememt: any) => {
      if (!isLogged) {
        if (
          this.isBrowser() &&
          elememt.userName == username &&
          elememt.password == password
        ) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userJson', JSON.stringify(elememt));
          this.isLoggedInSubject.next(true);
          isLogged = true;
        }
      }
    });
    if (isLogged) {
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
