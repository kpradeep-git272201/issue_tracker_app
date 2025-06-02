import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppConfig } from '../../config/app.config';



@Injectable({
  providedIn: 'root',
})
export class ApiService {
  handleError!: (err: any, caught: Observable<any>) => ObservableInput<any>;
  loggedIn: boolean | undefined;
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

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


  login(userData: any) {
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
