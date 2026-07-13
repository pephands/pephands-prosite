import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseHttpService } from '../Http/baseHttp';
import { Endpoint } from '../Http/endpoint';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImpactCountsService extends BaseHttpService {
  constructor(public endPoint: Endpoint, public injector: Injector) {
    super(injector);
  }

  get isAuthenticatedEndpoint(): boolean {
    return false;
  }

  get endpoint(): string {
    return this.endPoint.impactCounts;
  }

  getData(params?: any): Observable<object> {
    return this.httpNoUserGetMethod(params).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() => new Error(error.message || 'Server Error'));
  }
}
