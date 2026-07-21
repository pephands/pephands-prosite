import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Blogs } from './pages/blogs/blogs';
import { BlogDetails } from './pages/blog-details/blog-details';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { TermsAndConditions } from './pages/terms/terms';
import { RefundPolicy } from './pages/refund/refund';
import { CookiesPolicy } from './pages/cookies/cookies';
import { LegalPage } from './pages/legal/legal';
import { Faqs } from './pages/faqs/faqs';
import { Contact } from './pages/contact/contact';
import { Volunteer } from './pages/volunteer/volunteer';
import { NotFound } from './pages/not-found/not-found';
import { OurMotto } from './pages/our-motto/our-motto';
import { HowStarted } from './pages/how-started/how-started';
import { FoundersTrustees } from './pages/founders-trustees/founders-trustees';
import { OurTeam } from './pages/our-team/our-team';
import { PephandsChronicles } from './pages/pephands-chronicles/pephands-chronicles';
import { SdgContributions } from './pages/sdg-contributions/sdg-contributions';
import { AnnualReports } from './pages/annual-reports/annual-reports';
import { SuccessStories } from './pages/success-stories/success-stories';
import { SuperMom } from './pages/super-mom/super-mom';
import { DonateMilk } from './pages/donate-milk/donate-milk';
import { GetMilk } from './pages/get-milk/get-milk';
import { Pepcares } from './pages/pepcares/pepcares';
import { IchCenter } from './pages/ich-center/ich-center';
import { NeonatalKitchen } from './pages/neonatal-kitchen/neonatal-kitchen';
import { GiveinKind } from './pages/givein-kind/givein-kind';
import { IamEvent } from './pages/iam-event/iam-event';
import { AllEvents } from './pages/all-events/all-events';
import { RecentEvents } from './pages/recent-events/recent-events';
import { UpcomingEvents } from './pages/upcoming-events/upcoming-events';
import { Marathon2026 } from './pages/marathon-2026/marathon-2026';
import { EducationCampaigns } from './pages/education-campaigns/education-campaigns';
import { MedicalCampaigns } from './pages/medical-campaigns/medical-campaigns';
import { StrayFood } from './pages/stray-food/stray-food';
import { CareFund } from './pages/care-fund/care-fund';
import { SpecialdayAll } from './pages/specialday-all/specialday-all';
import { CampaignDetail } from './pages/campaign-detail/campaign-detail';
import { SpecialdayDetail } from './pages/specialday-detail/specialday-detail';
import { Marathongallery2026 } from './pages/marathongallery-2026/marathongallery-2026';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blogs', component: Blogs, title: 'Blogs - Pephands Foundation' },
  { path: 'blogs/:blogUrl', component: BlogDetails },
  {
    path: 'privacy-policy',
    component: PrivacyPolicy,
    title: 'Privacy Policy - Pephands Foundation',
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditions,
    title: 'Terms and Conditions - Pephands Foundation',
  },
  { path: 'refund-policy', component: RefundPolicy, title: 'Refund Policy - Pephands Foundation' },
  {
    path: 'cookies-policy',
    component: CookiesPolicy,
    title: 'Cookies Policy - Pephands Foundation',
  },
  { path: 'legal', component: LegalPage, title: 'Legal Information - Pephands Foundation' },
  { path: 'faqs', component: Faqs, title: 'FAQs - Pephands Foundation' },
  { path: 'contact-us', component: Contact, title: 'Contact Us - Pephands Foundation' },
  { path: 'volunteer', component: Volunteer, title: 'Volunteer - Pephands Foundation' },
  { path: 'our-motto', component: OurMotto, title: 'Our Motto - Pephands Foundation' },
  { path: 'about-us', component: HowStarted, title: 'About Us - Pephands Foundation' },
  {
    path: 'our-founders-and-trustees',
    component: FoundersTrustees,
    title: 'Our Founders and Trustees - Pephands Foundation',
  },
  { path: 'our-team', component: OurTeam, title: 'Our Team - Pephands Foundation' },
  {
    path: 'pephands-chronicles',
    component: PephandsChronicles,
    title: 'Pephands Chronicles - Pephands Foundation',
  },
  {
    path: 'sdg-goals',
    component: SdgContributions,
    title: 'SDG Contributions - Pephands Foundation',
  },
  {
    path: 'annual-reports',
    component: AnnualReports,
    title: 'Annual Reports - Pephands Foundation',
  },
  {
    path: 'success-stories',
    component: SuccessStories,
    title: 'Success Stories - Pephands Foundation',
  },
  { path: 'super-mom', component: SuperMom, title: 'Super Mom - Pephands Foundation' },
  { path: 'super-mom/donate', component: DonateMilk, title: 'Donate Milk - Pephands Foundation' },
  { path: 'super-mom/get-milk', component: GetMilk, title: 'Get Milk - Pephands Foundation' },
  { path: 'palliative', component: Pepcares, title: 'Pepcares - Pephands Foundation' },
  { path: 'pepcares/ich-center', component: IchCenter, title: 'ICH Center - Pephands Foundation' },
  { path: 'neonatal', component: NeonatalKitchen, title: 'Neonatal Kitchen - Pephands Foundation' },
  { path: 'give-in-kind', component: GiveinKind, title: 'Give in Kind - Pephands Foundation' },
  { path: 'iam', component: IamEvent, title: 'IAM - Pephands Foundation' },
  { path: 'events', component: AllEvents, title: 'All Events - Pephands Foundation' },
  {
    path: 'recent-events/:eventUrl',
    component: RecentEvents,
    title: 'Recent Events - Pephands Foundation',
  },
  {
    path: 'upcoming-events/:eventUrl',
    component: UpcomingEvents,
    title: 'Upcoming Events - Pephands Foundation',
  },
  {
    path: 'run-for-life-marathon',
    component: Marathon2026,
    title: 'Marathon 2026 - Pephands Foundation',
  },
  {
    path: 'run-for-life-marathon-gallery',
    component: Marathongallery2026,
    title: 'Marathon 2026 Gallery - Pephands Foundation',
  },
  {
    path: 'causes/education',
    component: EducationCampaigns,
    title: 'Education Campaigns - Pephands Foundation',
  },
  {
    path: 'causes/medical',
    component: MedicalCampaigns,
    title: 'Medical Campaigns - Pephands Foundation',
  },
  {
    path: 'donate/celebrate-special-day',
    component: SpecialdayAll,
    title: 'Celebrate Your Special Day - Pephands Foundation',
  },
  {
    path: 'donate/paws-and-plates',
    component: StrayFood,
    title: 'Feeding Strays - Pephands Foundation',
  },
  {
    path: 'donate/:specialUrl',
    component: SpecialdayDetail,
    title: 'Celebrate Your Special Day by Giving - Pephands Foundation',
  },
  { path: 'care-fund', component: CareFund, title: 'Care Fund - Pephands Foundation' },
  {
    path: 'donate-on-special-day',
    component: SpecialdayAll,
    title: 'Celebrate Your Special Day - Pephands Foundation',
  },
  {
    path: 'causes/:campaignUrl',
    component: CampaignDetail,
    title: 'Campaign Details - Pephands Foundation',
  },
  { path: '**', component: NotFound, title: 'Page Not Found - Pephands Foundation' },
];
