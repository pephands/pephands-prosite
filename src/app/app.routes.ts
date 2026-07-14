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
  { path: 'volunteer', component: Volunteer, title: 'Volunteer - Pephands Foundation' }
];
