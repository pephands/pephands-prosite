import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Endpoint {
  // baseURL: string = environment.apiUrl;
  baseURL: string = 'https://pepfoundation.el.r.appspot.com/';
  // baseURL: string = 'http://127.0.0.1:8000/';

  fundURL: string = environment.fundUrl;
  // fundURL: string = 'https://api2.pephands.com/';

  get createProject(): string {
    return this.baseURL + 'iam/innovative_project/fetch/';
  }

  get isUserExists(): string {
    return this.baseURL + 'iam/student/is_student_exist/';
  }

  get logIn(): string {
    return this.baseURL + 'iam/student/login/';
  }

  get updateUser(): string {
    return this.baseURL + 'iam/student/update/';
  }

  get createUser(): string {
    return this.baseURL + 'iam/student/create/';
  }

  get contactUs(): string {
    return this.baseURL + 'crowdfunding/contact-us/';
  }

  get fundRequest(): string {
    return this.fundURL + 'funds/fund_request/';
  }

  get micCertificate(): string {
    return this.fundURL + 'yummyfest/download/';
  }

  get milkDonor(): string {
    return this.baseURL + 'super-mom/milkdonors/';
  }

  get milkNeedy(): string {
    return this.baseURL + 'super-mom/needybabies/';
  }

  get subscribe(): string {
    return this.baseURL + 'crowdfunding/subscribe/';
  }

  get recentEvents(): string {
    return this.baseURL + 'sitedata/recent-events/';
  }

  get upcomingEvents(): string {
    return this.baseURL + 'sitedata/upcoming-events/';
  }

  get cricketTeam(): string {
    return this.baseURL + 'eventdetail/cricket/';
  }

  get eventPayment(): string {
    return this.baseURL + 'eventdetail/payment-request/';
  }

  get eventPaymentSuccess(): string {
    return this.baseURL + 'eventdetail/ppl-regn-success/';
  }

  get eventPaymentFailure(): string {
    return this.baseURL + 'eventdetail/ppl-regn-failure/';
  }

  get getBlogs(): string {
    return this.baseURL + 'crowdfunding/blogs/';
  }

  get getSpecialCampaignsList(): string {
    return this.baseURL + 'specialday/campaign-list/';
  }

  get getSDGgoals(): string {
    return this.baseURL + 'specialday/sdg-goals/';
  }

  get getSpecialDaysList(): string {
    return this.baseURL + 'specialday/specialday-list/';
  }

  get specialDayBooking(): string {
    return this.baseURL + 'specialday/booking/';
  }

  get specialDayBookingRazorpay(): string {
    return this.baseURL + 'specialday/rzp-booking/';
  }

  get specialDayPaymentSuccess(): string {
    return this.baseURL + 'specialday/payment-success/';
  }

  get specialDayPaymentSuccessRazorpay(): string {
    return this.baseURL + 'specialday/rzp-payment-success-check/';
  }

  get specialDayPaymentFailure(): string {
    return this.baseURL + 'specialday/payment-failure/';
  }

  get specialDayPaymentFailureRazorpay(): string {
    return this.baseURL + 'specialday/rzp-payment-failure/';
  }

  get banners(): string {
    return this.baseURL + 'sitedata/banners/';
  }
  get volunteerForm(): string {
    return this.baseURL + 'sitedata/volunteers/';
  }

  get generalDonationPayment(): string {
    return this.baseURL + 'funds/rzp-payment-request/';
  }

  get generalDonationSuccess(): string {
    return this.baseURL + 'funds/rzp-payment-success-check/';
  }

  get generalDonationFailure(): string {
    return this.baseURL + 'funds/rzp-payment-failure/';
  }

  get specialNotifications(): string {
    return this.baseURL + 'specialday/recent-donation-notification/';
  }

  get popUpLeads(): string {
    return this.baseURL + 'specialday/popup-leads/';
  }

  get impactCounts(): string {
    return this.baseURL + 'specialday/impact-counts/';
  }

  // monthly subscriptions

  get subCategories(): string {
    return this.baseURL + 'subscription/catogory/';
  }

  get getSubscriptionUrl(): string {
    return this.baseURL + 'subscription/create/';
  }

  get wagwalkBooking(): string {
    return this.baseURL + 'wag_and_walk/registration/'
  }

  get giveInKind(): string {
    return this.baseURL + 'sitedata/giveinkind/';
  }

  get marathon2026(): string {
    return this.baseURL + 'eventdetail/run-for-life-marathon-2026/';
  }

  get givinghandsCategory(): string {
    return this.baseURL + 'givinghands/category/';
  }

  get givinghandsCampaign(): string {
    return this.baseURL + 'givinghands/campaign/';
  }

  get givinghandsCampaignImage(): string {
    return this.baseURL + 'givinghands/campaign-image/';
  }

  get givinghandsRazorpayInitiate(): string {
    return this.baseURL + 'givinghands/donation/razorpay/initiate/';
  }

  get givinghandsRecentDonations(): string {
    return this.baseURL + 'givinghands/recent-donations/';
  }

  get givinghandsCampaignUpdate(): string {
    return this.baseURL + 'givinghands/campaign-update/';
  }
}
