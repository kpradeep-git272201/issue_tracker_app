import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppConfig } from '../../../config/app.config';

@Injectable({
  providedIn: 'root',
})
export class AccountingService {
  handleError!: (err: any, caught: Observable<any>) => ObservableInput<any>;
  loggedIn: boolean | undefined;
  constructor(private http: HttpClient) {}

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

  // getMenus() {
  //   const token = localStorage.getItem('token');
  //   const url = `${AppConfig.BASE_API}${AppConfig.endpointPath.menus}`;
  //   const headers = new HttpHeaders()
  //     .set('content-type', 'application/json')
  //     .set('Accept', 'application/json')
  //     .set('Authorization', `Bearer ${token}`);
  //   return this.request('GET', url, {
  //     headers: headers,
  //     reportProgress: false,
  //     observe: 'response',
  //   }).pipe(
  //     map((resp) => {
  //       return resp;
  //     }),
  //     catchError((error) => {
  //       alert(error);
  //       return of(error);
  //     }),
  //   );
  // }

  getDataFromEgram(): Observable<any> {
    const url = `${AppConfig.BASE_API}hello`;
    return this.http.get(url, {
      responseType: 'text' as 'json',
    });
  }
}
