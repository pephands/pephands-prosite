import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseHttpService } from '../Http/baseHttp';
import { Endpoint } from '../Http/endpoint';

@Injectable({
  providedIn: 'root',
})
export class GeneralDonationPaymentService extends BaseHttpService {
  constructor(public endPoint: Endpoint, public injector: Injector) {
    super(injector);
  }

  get isAuthenticatedEndpoint(): boolean {
    return false;
  }

  get endpoint(): string {
    return this.endPoint.generalDonationPayment;
  }

  getData(params: any): Observable<object> {
    return this.httpPostMethod(params);
  }
}

@Injectable({
  providedIn: 'root',
})
export class GeneralDonationSuccessService extends BaseHttpService {
  constructor(public endPoint: Endpoint, public injector: Injector) {
    super(injector);
  }

  get isAuthenticatedEndpoint(): boolean {
    return false;
  }

  get endpoint(): string {
    return this.endPoint.generalDonationSuccess;
  }

  getData(params: any): Observable<object> {
    return this.httpPostMethod(params);
  }
}

@Injectable({
  providedIn: 'root',
})
export class GeneralDonationFailureService extends BaseHttpService {
  constructor(public endPoint: Endpoint, public injector: Injector) {
    super(injector);
  }

  get isAuthenticatedEndpoint(): boolean {
    return false;
  }

  get endpoint(): string {
    return this.endPoint.generalDonationFailure;
  }

  getData(params: any): Observable<object> {
    return this.httpPostMethod(params);
  }
}
