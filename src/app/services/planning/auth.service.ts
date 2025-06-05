import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AppConfig } from '../../config/app.config';

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
  loggedIn: boolean | undefined;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private http: HttpClient) {
    if (this.isBrowser() && localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedInSubject.next(true);
    }
  }

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  login(username: string, password: string): boolean {
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
      localStorage.removeItem('loggedUser');
      localStorage.removeItem('token');
      this.isLoggedInSubject.next(false);
    }
  }

  isAuthenticated(): boolean {
    if (this.isBrowser()) {
         const token = localStorage.getItem('token');
      return (token) ? true : false;
    }
    return false;
  }


  /********************* **************************** REST API's Integration **************************** */
  handleError!: (err: any, caught: Observable<any>) => ObservableInput<any>;



  public request(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: any;
      observe?: any;
      reportProgress?: boolean;
    },
  ): Observable<any> {
    return this.http
      .request(method, url, options)
      .pipe(catchError(this.handleError));
  }


  getLogin(userData: any) {
    console.log('data' + JSON.stringify(userData));
    const url = `${AppConfig.BASE_API}${AppConfig.endpointPath.login}`;
    const headers = new HttpHeaders().set('content-type', 'application/json').set('Accept', 'application/json');
    return this.request('POST', url, { body: userData, headers: headers, reportProgress: false, observe: 'response' }).pipe(
      map(resp => {
        this.loggedIn = true;
        return resp;
      }),
      catchError(error => {
        this.loggedIn = false;
        return of(false);
      })
    );
  }
}
