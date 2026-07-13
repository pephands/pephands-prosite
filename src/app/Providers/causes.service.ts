import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../Http/baseHttp';
import { Endpoint } from '../Http/endpoint';

@Injectable({
  providedIn: 'root',
})
export class CausesService extends BaseHttpService {
  constructor(public endPoint: Endpoint, public injector: Injector) {
    super(injector);
  }

  get isAuthenticatedEndpoint(): boolean {
    return false;
  }

  get endpoint(): string {
    return this.endPoint.givinghandsCampaign;
  }

  getData(params?: any): Observable<object> {
    return this.httpGetMethod(params);
  }

  initiateRazorpayPayment(data: any): Observable<any> {
    return this.httpClient.post(this.endPoint.givinghandsRazorpayInitiate, data, {
      headers: this.headers,
    });
  }

  getRecentDonations(campaignId: string): Observable<any> {
    const url = `${this.endPoint.givinghandsRecentDonations}?campaign_id=${campaignId}`;
    return this.httpClient.get(url, { headers: this.headers });
  }

  getCampaignUpdates(campaignId: string): Observable<any> {
    const url = `${this.endPoint.givinghandsCampaignUpdate}?campaign=${campaignId}`;
    return this.httpClient.get(url, { headers: this.headers });
  }
}
