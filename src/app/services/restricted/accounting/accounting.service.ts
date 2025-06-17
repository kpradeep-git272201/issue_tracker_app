import { Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, ObservableInput, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfig } from '../../../config/app.config';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AccountingService implements OnInit{

  private selectedForMapIds = new BehaviorSubject<any>(false);
  public selectedForMapIds$ = this.selectedForMapIds.asObservable();

  private selectedForUnMapIds = new BehaviorSubject<any>(false);
  public selectedForUnMapIds$ = this.selectedForUnMapIds.asObservable();

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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  SetSelectedForMapIds(selectedForMapIds:any){
    this.selectedForMapIds.next(selectedForMapIds);
  }

  setSelectedForUnMapIds(selectedForUnMapIds:any){
    this.selectedForUnMapIds.next(selectedForUnMapIds);
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
      responseType?: any;
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

  getBankListByStateCode(stateCode: any) {
    const url = `${AppConfig.BASE_API}${AppConfig.endpointPath.bankList}/${stateCode}`;
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

  getDistricPanchByBank(stateCode: any, bankCode: any) {
    const url = `${AppConfig.BASE_API}${AppConfig.endpointPath.districtListOfBankBranch}/${stateCode}/${bankCode}`;
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

  getUnMappedBranch(stateCode: any, bankCode: any, zpCode: any) {
    const url = `${AppConfig.BASE_API}${AppConfig.endpointPath.unMappedBranch}/${stateCode}/${bankCode}/${zpCode}`;
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

  getMappedBranch(stateCode: any, bankCode: any, zpCode: any) {
    const url = `${AppConfig.BASE_API}${AppConfig.endpointPath.mappedBranch}/${stateCode}/${bankCode}/${zpCode}`;
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


  saveBranchMappingUnMapping(data:any){
    console.log('data' + JSON.stringify(data));
    const url = `${AppConfig.BASE_API}${AppConfig.endpointPath.saveBranchMappingUnMapping}`;
    console.log(url);
    const headers = new HttpHeaders().set('content-type', 'application/json').set('Authorization', `${this.token}`);
    return this.request('POST', url, { body: data, headers: headers, responseType: 'text' as 'json' , reportProgress: false, observe: 'response' }).pipe(
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

  masterAgency(data:any){
    console.log('data' + JSON.stringify(data));
    const url = `${AppConfig.BASE_API}${AppConfig.endpointPath.masterAgency}`;
    console.log(url);
    const headers = new HttpHeaders().set('content-type', 'application/json').set('Authorization', `${this.token}`);
    return this.request('POST', url, { body: data, headers: headers, responseType: 'text' as 'json' , reportProgress: false, observe: 'response' }).pipe(
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
          },
        ],
      },
    ];
  }
}
