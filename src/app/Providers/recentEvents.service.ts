import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../Http/baseHttp';
import { Endpoint } from '../Http/endpoint';

@Injectable({
  providedIn: 'root',
})
export class FetchRecentEventsService extends BaseHttpService {
  constructor(public endPoint: Endpoint, public injector: Injector) {
    super(injector);
  }

  get isAuthenticatedEndpoint(): boolean {
    return false;
  }

  get endpoint(): string {
    return this.endPoint.recentEvents;
  }

  getData(params?: any): Observable<object> {
    return this.httpNoUserGetMethod(params);
  }
}
