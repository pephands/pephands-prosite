import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseHttpService } from '../Http/baseHttp';
import { Endpoint } from '../Http/endpoint';

@Injectable({
    providedIn: 'root',
})
export class MarathonRegistrationService extends BaseHttpService {
    constructor(public endPoint: Endpoint, public injector: Injector) {
        super(injector);
    }

    get isAuthenticatedEndpoint(): boolean {
        return false;
    }

    get endpoint(): string {
        return this.endPoint.marathon2026;
    }

    getData(params: any): Observable<object> {
        return this.httpNoUserPostMultipartMethod(params);
    }
}