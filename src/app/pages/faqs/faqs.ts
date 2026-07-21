import { SeoService } from '../../Providers/seo.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FaqCategory {
  id: string;
  title: string;
  icon: string;
  questions: { q: string; a: string }[];
}

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.css'
})
export class Faqs implements OnInit {
  constructor(private seoService: SeoService) {}
  activeCategory: string = 'about';
  openQuestionId: string | null = null;

  toggleQuestion(id: string) {
    if (this.openQuestionId === id) {
      this.openQuestionId = null;
    } else {
      this.openQuestionId = id;
    }
  }

  setActiveCategory(categoryId: string) {
    this.activeCategory = categoryId;
    this.openQuestionId = null;
  }

  faqCategories: FaqCategory[] = [
    {
      id: 'about',
      title: 'About Pephands',
      icon: 'bi-info-circle',
      questions: [
        { q: 'What is Pephands Foundation?', a: 'Pephands Foundation is a registered non-governmental organization committed to bridging the gap between those who can help and those in need, focusing on hunger, education, and healthcare.' },
        { q: 'When was the foundation established?', a: 'We have been operating with a dedicated team of volunteers and trustees for several years, formally registering to expand our charitable footprint.' },
        { q: 'Where are you headquartered?', a: 'Our primary administrative office is located in Chennai, Tamil Nadu, India.' },
        { q: 'What is your core mission?', a: 'Our mission is to empower marginalized communities through sustainable support systems, prioritizing child welfare, senior care, and animal welfare.' },
        { q: 'Are you a registered NGO?', a: 'Yes, we are a fully registered and legally compliant charitable trust in India.' },
        { q: 'Who runs the organization?', a: 'We are run by a dedicated board of trustees, supported by an advisory board and hundreds of passionate volunteers.' },
        { q: 'How many people have you helped?', a: 'Through our daily feeding programs, educational drives, and medical camps, we have impacted thousands of lives across our operational areas.' },
        { q: 'Do you operate internationally?', a: 'Currently, our primary focus and on-the-ground operations are based in India.' },
        { q: 'How can I stay updated on your work?', a: 'You can subscribe to our newsletter via the footer on our website or follow us on our active social media channels.' },
        { q: 'What are your main areas of focus?', a: 'We focus on Hunger Relief, Education, Medical Aid, Stray Animal Care, and Women\'s Hygiene.' },
        { q: 'Do you have a physical office I can visit?', a: 'Yes, our office in Chennai is open to visitors by appointment for partnership discussions and volunteer orientations.' },
        { q: 'How do you measure your impact?', a: 'We track the number of meals served, children educated, and medical treatments provided, publishing these metrics in our annual reports.' },
        { q: 'Are you affiliated with any religious or political group?', a: 'No, Pephands Foundation is strictly secular and non-political. We help individuals strictly based on need.' },
        { q: 'Can I request help from the foundation?', a: 'Yes, if you know a community in distress, you can reach out to us via our Contact page for assessment.' },
        { q: 'How do I contact support?', a: 'You can email us at info@pephands.org or call +91 7305009919.' },
        { q: 'What is your vision for the next 5 years?', a: 'We aim to expand our hunger-free zones to 10 more cities and establish fully funded rural clinics.' },
        { q: 'Do you have an advisory board?', a: 'Yes, our advisory board consists of industry veterans and philanthropists who guide our strategic growth.' },
        { q: 'How can I read your Pephands Chronicles?', a: 'Our Chronicles and success stories are available in the "Blog" section of our website.' },
        { q: 'Is the website secure?', a: 'Yes, our website uses SSL encryption to ensure your data and browsing experience are completely secure.' },
        { q: 'Who designed your website?', a: 'Our digital platform was custom-built to provide a transparent and seamless experience for our donors.' }
      ]
    },
    {
      id: 'donations',
      title: 'Donations & Payments',
      icon: 'bi-wallet2',
      questions: [
        { q: 'How can I make a donation?', a: 'You can donate directly through our website using credit/debit cards, net banking, or UPI via our secure payment gateway.' },
        { q: 'Is my donation tax-deductible?', a: 'Yes, if applicable under Indian law (like 80G), valid donations will receive a tax exemption certificate.' },
        { q: 'Will I get a receipt for my donation?', a: 'Absolutely. An electronic receipt is automatically emailed to you upon successful payment.' },
        { q: 'Can I donate anonymously?', a: 'Yes, you can choose to keep your identity private during the checkout process.' },
        { q: 'Is there a minimum donation amount?', a: 'Certain specific campaigns may have minimum amounts, but generally, we welcome contributions of any size.' },
        { q: 'Can I set up a recurring monthly donation?', a: 'Yes, our platform supports subscription-based monthly giving to help sustain our long-term projects.' },
        { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards, UPI, Wallets, and direct bank transfers.' },
        { q: 'Is it safe to donate online?', a: 'Yes, we use bank-level encryption and partner with industry-leading payment gateways; we never store your card details.' },
        { q: 'Where does my money go?', a: 'Your funds are directly allocated to the campaign you selected. A small, capped percentage goes toward essential administrative costs.' },
        { q: 'Can I cancel a recurring donation?', a: 'Yes, you can cancel or pause your monthly subscription at any time by contacting our support team.' },
        { q: 'What is your refund policy?', a: 'Donations are generally non-refundable. However, we do process refunds in cases of technical transaction errors. Please see our Refund Policy page.' },
        { q: 'Can I donate in kind (food, clothes)?', a: 'Yes, we accept in-kind donations. Please contact our office to coordinate the logistics.' },
        { q: 'Can I donate from outside India?', a: 'We accept international donations subject to our FCRA registration status. Please contact us for specific routing instructions.' },
        { q: 'How do I update my payment information?', a: 'You can update your payment method by contacting support or through the link provided in your recurring donation email.' },
        { q: 'Do you charge transaction fees?', a: 'We do not charge fees, but the payment gateway may deduct standard processing fees before the funds reach us.' },
        { q: 'Can I dedicate a donation to someone?', a: 'Yes, you can donate in honor or memory of a loved one. We also have "Celebrate Your Special Day" campaigns.' },
        { q: 'How soon are the funds deployed?', a: 'Funds are typically deployed to active ground campaigns within 7-14 days of receipt.' },
        { q: 'What happens if a campaign is overfunded?', a: 'If a specific goal is exceeded, surplus funds are redirected to a similar campaign with urgent needs.' },
        { q: 'Do I need an account to donate?', a: 'No, guest checkout is available for all donations.' },
        { q: 'Who do I contact for payment issues?', a: 'Please call +91 7305009919 or email us for immediate resolution of payment errors.' }
      ]
    },
    {
      id: 'campaigns',
      title: 'Campaigns & Initiatives',
      icon: 'bi-megaphone',
      questions: [
        { q: 'What is the "Celebrate Your Special Day" initiative?', a: 'It allows you to sponsor meals or gifts for the needy on your birthday or anniversary.' },
        { q: 'How does the food donation program work?', a: 'We cook and distribute fresh, nutritious meals to homeless shelters and slums every week.' },
        { q: 'Do you help stray animals?', a: 'Yes, our "Feeding Strays" campaign provides daily food and medical aid to street dogs and cats.' },
        { q: 'What is the "Provide a Study Kit" program?', a: 'We assemble and distribute backpacks, stationery, and books to underprivileged schoolchildren.' },
        { q: 'How do you support senior citizens?', a: 'We partner with senior homes to provide groceries, medical checkups, and recreational support.' },
        { q: 'What is the "Giving Grocery for a Month" campaign?', a: 'We identify impoverished families and provide them with a month\'s supply of essential dry rations.' },
        { q: 'Do you conduct medical camps?', a: 'Yes, we regularly host free health checkup camps in rural and slum areas.' },
        { q: 'What is the women\'s hygiene kit initiative?', a: 'We distribute sanitary pads and hygiene essentials to women in low-income areas while conducting awareness workshops.' },
        { q: 'Can I sponsor a specific child\'s education?', a: 'Yes, we have long-term educational sponsorship programs available upon request.' },
        { q: 'How do you choose your beneficiaries?', a: 'Our ground volunteers conduct thorough needs assessments to ensure aid reaches the most deserving individuals.' },
        { q: 'Can I visit a campaign on the ground?', a: 'Yes, donors are welcome to join our distribution drives to witness the impact firsthand.' },
        { q: 'How often do you launch new campaigns?', a: 'We launch seasonal campaigns (like winter blankets or festive feasts) and maintain our core daily campaigns year-round.' },
        { q: 'What was your most successful campaign?', a: 'Our pandemic relief drive and our ongoing daily feeding programs have had the most extensive reach.' },
        { q: 'Do you partner with other NGOs?', a: 'Yes, we believe in collaborative impact and often partner with specialized local NGOs.' },
        { q: 'How do I suggest a new initiative?', a: 'We welcome community suggestions. Please email your proposal to info@pephands.org.' },
        { q: 'Do you provide disaster relief?', a: 'Yes, we mobilize emergency funds and supplies during natural disasters like floods or cyclones.' },
        { q: 'What is the "Gifting a Wheelchair" drive?', a: 'We provide mobility aids, including custom wheelchairs, to differently-abled individuals who cannot afford them.' },
        { q: 'Are campaign progress updates provided?', a: 'Yes, we post updates, photos, and impact metrics on our blog and social media pages.' },
        { q: 'Can a corporate sponsor a whole campaign?', a: 'Absolutely. We offer customized CSR campaign execution and reporting.' },
        { q: 'How long do campaigns run?', a: 'Some are ongoing (like stray feeding), while others have a specific timeline or funding goal.' }
      ]
    },
    {
      id: 'volunteering',
      title: 'Volunteering & Careers',
      icon: 'bi-people',
      questions: [
        { q: 'How do I become a volunteer?', a: 'You can apply through the "Join Now As a Volunteer" link in our footer.' },
        { q: 'Are there age restrictions for volunteering?', a: 'Volunteers under 18 require parental consent. Some field activities are restricted to adults for safety reasons.' },
        { q: 'Do I get a certificate for volunteering?', a: 'Yes, we provide official volunteer certificates detailing your hours and contributions.' },
        { q: 'Can I volunteer remotely?', a: 'Yes, we have remote opportunities in social media management, content writing, and graphic design.' },
        { q: 'Is volunteering a paid position?', a: 'No, volunteering is strictly unpaid community service.' },
        { q: 'What is the time commitment?', a: 'It is flexible. You can volunteer for a single weekend drive or commit to a weekly schedule.' },
        { q: 'Do you offer internships?', a: 'Yes, we offer structured internships for college students seeking social work experience.' },
        { q: 'Are there any full-time career opportunities?', a: 'We occasionally hire full-time staff for administrative and project management roles. Check our Careers page.' },
        { q: 'Do you provide training for volunteers?', a: 'Yes, all new volunteers undergo an orientation and safety training session before field deployment.' },
        { q: 'Can my company do a corporate volunteering day?', a: 'Yes, we organize customized employee engagement drives for our CSR partners.' },
        { q: 'What should I wear to a field drive?', a: 'Comfortable, modest clothing and closed-toe shoes. We will provide a Pephands volunteer badge or t-shirt.' },
        { q: 'Will I be working alone?', a: 'No, our volunteers always work in teams led by an experienced coordinator.' },
        { q: 'Can I raise funds as a volunteer?', a: 'Yes, we encourage peer-to-peer fundraising. We can set up a custom tracking link for you.' },
        { q: 'How do I track my volunteer hours?', a: 'Our coordinators maintain a logbook. You can request your hour summary at any time.' },
        { q: 'Do you cover travel expenses for volunteers?', a: 'Generally, volunteers cover their own local travel, though transport is provided for remote rural camps.' },
        { q: 'Can I bring my children to volunteer?', a: 'For specific family-friendly events, yes. Please confirm with the coordinator beforehand.' },
        { q: 'How many volunteers do you currently have?', a: 'We have a network of hundreds of active volunteers across our operational zones.' },
        { q: 'What happens if I sign up but cannot attend?', a: 'We ask that you notify your coordinator at least 24 hours in advance so we can find a replacement.' },
        { q: 'Can international volunteers join?', a: 'Yes, visitors to India are welcome to join our drives during their stay.' },
        { q: 'Who do I contact regarding a career application?', a: 'Please direct all resume submissions to hr@pephands.org.' }
      ]
    },
    {
      id: 'csr',
      title: 'CSR & Partnerships',
      icon: 'bi-building',
      questions: [
        { q: 'What is CSR?', a: 'Corporate Social Responsibility (CSR) refers to corporate initiatives that assess and take responsibility for the company\'s effects on social wellbeing.' },
        { q: 'How can my company partner with you?', a: 'You can reach out via the "CSR Partnership" link in our footer to schedule an exploratory meeting.' },
        { q: 'Are you eligible to receive CSR funds?', a: 'Yes, we meet all legal requirements and possess the necessary certifications to receive corporate CSR grants.' },
        { q: 'Do you provide CSR utilization reports?', a: 'Absolutely. We provide comprehensive, audit-ready impact reports detailing exactly how funds were deployed.' },
        { q: 'Can we co-brand a campaign?', a: 'Yes, we offer co-branding opportunities for major corporate sponsors.' },
        { q: 'What kind of projects can we fund?', a: 'You can fund existing campaigns or we can design a bespoke project that aligns with your company\'s CSR mandate.' },
        { q: 'How long does it take to set up a partnership?', a: 'Once the MoU is signed, we can launch a joint initiative within 2-4 weeks.' },
        { q: 'Can our CEO visit the project site?', a: 'Yes, we highly encourage leadership visits and can facilitate press and media coverage.' },
        { q: 'Do you sign Non-Disclosure Agreements (NDAs)?', a: 'Yes, we are happy to sign NDAs regarding your corporate strategies and funding structures.' },
        { q: 'Who are your current partners?', a: 'We partner with various ethical businesses across tech, retail, and manufacturing sectors.' },
        { q: 'Is there a minimum CSR grant size?', a: 'We tailor projects to various budget sizes, though formal CSR reporting usually applies to larger grants.' },
        { q: 'How do you ensure accountability?', a: 'Through strict financial auditing, milestone tracking, and transparent digital reporting.' },
        { q: 'Can we donate products instead of money?', a: 'Yes, we welcome bulk donations of food, medical supplies, or educational materials from manufacturers.' },
        { q: 'Do you offer employee payroll giving?', a: 'Yes, we can help set up a system where your employees can auto-donate a portion of their salary.' },
        { q: 'How do you measure ROI for CSR?', a: 'We measure Social Return on Investment (SROI) by quantifying the social impact generated per rupee spent.' },
        { q: 'Can you handle nationwide CSR projects?', a: 'While our core is in Tamil Nadu, we have the network to execute multi-city projects if adequately funded.' },
        { q: 'Who manages the CSR relationship?', a: 'You will be assigned a dedicated Project Manager from our team.' },
        { q: 'Do you provide tax documents for CSR?', a: 'Yes, all necessary compliance certificates and receipts are provided promptly.' },
        { q: 'Can we sponsor a fundraising event?', a: 'Yes, event sponsorships are a great way to gain visibility while supporting our cause.' },
        { q: 'What is the first step to partner?', a: 'Email our partnership team at info@pephands.org with your CSR objectives.' }
      ]
    }
  ];

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Faqs',
      description: 'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
      image: '/logos/pephands-foundation.png',
      keywords: 'Pephands Foundation, ngo, charity, faqs'
    });
  }

}