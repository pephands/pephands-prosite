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

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blogs', component: Blogs, title: 'Blogs - Pephands Foundation' },
  { path: 'blogs/:blogUrl', component: BlogDetails },
  { path: 'privacy-policy', component: PrivacyPolicy, title: 'Privacy Policy - Pephands Foundation' },
  { path: 'terms-and-conditions', component: TermsAndConditions, title: 'Terms and Conditions - Pephands Foundation' },
  { path: 'refund-policy', component: RefundPolicy, title: 'Refund Policy - Pephands Foundation' },
  { path: 'cookies-policy', component: CookiesPolicy, title: 'Cookies Policy - Pephands Foundation' },
  { path: 'legal', component: LegalPage, title: 'Legal Information - Pephands Foundation' },
  { path: 'faqs', component: Faqs, title: 'FAQs - Pephands Foundation' },
  { path: 'contact-us', component: Contact, title: 'Contact Us - Pephands Foundation' },
  { path: 'volunteer', component: Volunteer, title: 'Volunteer - Pephands Foundation' },
  { path: 'our-motto', component: OurMotto, title: 'Our Motto - Pephands Foundation' },
  { path: 'about-us', component: HowStarted, title: 'About Us - Pephands Foundation' },
  { path: 'our-founders-and-trustees', component: FoundersTrustees, title: 'Our Founders and Trustees - Pephands Foundation' },
  { path: 'our-team', component: OurTeam, title: 'Our Team - Pephands Foundation' },
  { path: 'pephands-chronicles', component: PephandsChronicles, title: 'Pephands Chronicles - Pephands Foundation' },
  { path: 'sdg-goals', component: SdgContributions, title: 'SDG Contributions - Pephands Foundation' },
  { path: 'annual-reports', component: AnnualReports, title: 'Annual Reports - Pephands Foundation' },
  { path: 'success-stories', component: SuccessStories, title: 'Success Stories - Pephands Foundation' },
  { path: 'super-mom', component: SuperMom, title: 'Super Mom - Pephands Foundation' },
  { path: 'super-mom/donate', component: DonateMilk, title: 'Donate Milk - Pephands Foundation' },
  { path: 'super-mom/get-milk', component: GetMilk, title: 'Get Milk - Pephands Foundation' },
  { path: 'palliative', component: Pepcares, title: 'Pepcares - Pephands Foundation' },
  { path: 'pepcares/ich-center', component: IchCenter, title: 'ICH Center - Pephands Foundation' },
  { path: 'neonatal', component: NeonatalKitchen, title: 'Neonatal Kitchen - Pephands Foundation' },
  { path: 'give-in-kind', component: GiveinKind, title: 'Give in Kind - Pephands Foundation' },
  { path: 'iam', component: IamEvent, title: 'IAM - Pephands Foundation' },
  { path: '**', component: NotFound, title: 'Page Not Found - Pephands Foundation' }
];
