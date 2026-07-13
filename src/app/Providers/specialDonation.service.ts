import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseHttpService } from '../Http/baseHttp';
import { Endpoint } from '../Http/endpoint';

@Injectable({
  providedIn: 'root',
})
export class SpecialDonationBookingService extends BaseHttpService {
  constructor(public endPoint: Endpoint, public injector: Injector) {
    super(injector);
  }

  get isAuthenticatedEndpoint(): boolean {
    return false;
  }

  // Chnage these endpoints to change between icici and razorpay

  // get endpoint(): string {
  //   return this.endPoint.specialDayBooking;
  // }

  get endpoint(): string {
    return this.endPoint.specialDayBookingRazorpay;
  }

  getData(params: any): Observable<object> {
    return this.httpPostMultipartMethod(params);
  }
}

@Injectable({
  providedIn: 'root',
})
export class SpecialDayPaymentSuccessService extends BaseHttpService {
  constructor(public endPoint: Endpoint, public injector: Injector) {
    super(injector);
  }

  get isAuthenticatedEndpoint(): boolean {
    return false;
  }

  // Chnage these enpoints to change between icici and razorpay

  // get endpoint(): string {
  //   return this.endPoint.specialDayPaymentSuccess;
  // }

  get endpoint(): string {
    return this.endPoint.specialDayPaymentSuccessRazorpay;
  }

  getData(params: any): Observable<object> {
    return this.httpPostMethod(params);
  }
}

@Injectable({
  providedIn: 'root',
})
export class SpecialDayPaymentFailureService extends BaseHttpService {
  constructor(public endPoint: Endpoint, public injector: Injector) {
    super(injector);
  }

  get isAuthenticatedEndpoint(): boolean {
    return false;
  }

  // Chnage these endpoints to change between icici and razorpay

  // get endpoint(): string {
  //   return this.endPoint.specialDayPaymentFailure;
  // }

  get endpoint(): string {
    return this.endPoint.specialDayPaymentFailureRazorpay;
  }

  getData(params: any): Observable<object> {
    return this.httpPostMethod(params);
  }
}
