import { Injectable } from '@angular/core';
import { BaseHttpService } from '../Http/baseHttp';

@Injectable({
  providedIn: 'root'
})
export class CausesImageService extends BaseHttpService {
  get isAuthenticatedEndpoint(): boolean {
    return false;
  }
  
  get endpoint(): string {
    return (this.inject.get((<any>this).endpointClass) as any).givinghandsCampaignImage;
  }

  getData(params?: any) {
    return this.httpNoUserGetMethod(params);
  }
}
