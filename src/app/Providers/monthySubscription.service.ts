import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../Http/baseHttp';
import { Endpoint } from '../Http/endpoint';

@Injectable({
  providedIn: 'root',
})
export class FetchSubscriptionCategoriesService extends BaseHttpService {
  constructor(public endPoint: Endpoint, public injector: Injector) {
    super(injector);
  }

  get isAuthenticatedEndpoint(): boolean {
    return false;
  }

  get endpoint(): string {
    return this.endPoint.subCategories;
  }

  getData(params?: any): Observable<object> {
    return this.httpGetMethod(params);
  }
}

@Injectable({
  providedIn: 'root',
})
export class CreateSubscriptionService extends BaseHttpService {
  constructor(public endPoint: Endpoint, public injector: Injector) {
    super(injector);
  }

  get isAuthenticatedEndpoint(): boolean {
    return false;
  }

  get endpoint(): string {
    return this.endPoint.getSubscriptionUrl;
  }

  getData(params?: any): Observable<object> {
    return this.httpPostMethod(params);
  }
}
