import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfig } from '../../../config/app.config';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AccountingService {
  handleError!: (err: any, caught: Observable<any>) => ObservableInput<any>;
  loggedIn: boolean | undefined;
  token: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
  ) {
    if (this.isBrowser()) {
      this.token = localStorage.getItem('token');
    }
  }
  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
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

  getMenus(role: any) {
    const url = `${AppConfig.BASE_API}${AppConfig.endpointPath.menus}?${role}`;
    console.log(url);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `${this.token}`);
    return this.request('GET', url, {
      headers: headers,
      reportProgress: false,
      observe: 'response',
    }).pipe(
      map((resp) => {
        return resp;
      }),
      catchError((error) => {
        return of(error);
      }),
    );
  }

  getBankList() {
    return [
      {
        bankCode: 1,
        bankName: 'Murshidabad District Central Co-Op Bank Ltd',
        bankType: 'O',
      },
      {
        bankCode: 2,
        bankName: 'AXIS Banck',
        bankType: 'O',
      },
    ];
  }

  getPanchyatByBankList() {
    return [
      {
        bankCode: 1,
        data: [
          {
            entityCode: 345,
            entityName: 'Balangir1',
          },
          {
            entityCode: 346,
            entityName: 'Bhadrak2',
          },
        ],
      },
      {
        bankCode: 2,
        data: [
          {
            entityCode: 348,
            entityName: 'Balangir3',
          },
          {
            entityCode: 349,
            entityName: 'Bhadrak4',
          },
        ],
      },
    ];
  }

  getBranchByZpCode() {
    return [
      {
        zpCode: 345,
        branches: [
          {
            branchId: 1,
            branchName: 'BALASORE, OT ROAD, SUBHRA PLAZA, BALASORE',
          },
          {
            branchId: 2,
            branchName: 'JALESWARPUR, At #47, PO: Jaleswarpur',
          },
          {
            branchId: 3,
            branchName: 'JALESWAR, Thana Bazar, Jaleswar',
          },
          {
            branchId: 4,
            branchName:
              'SORO, Plot No - 448, Ground Floor, Unit-3, NH5, Soro, Infront of B',
          }
        ]
      }
    ]
  }
}
