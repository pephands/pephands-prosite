import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { GeneralDonationPaymentService } from '../../Providers/generalDonations.service';
import { MetaTagService } from '../../Providers/metaTag.service';
import { SeoService } from '../../Providers/seo.service';
import { BasePageComponent } from '../base';

@Component({
  selector: 'app-stray-food',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule, RouterModule],
  templateUrl: './stray-food.html',
  styleUrl: './stray-food.scss',
})
export class StrayFood extends BasePageComponent implements OnInit {

  donationForm!: FormGroup;
  source: any = ''; // Different source for this page
  paymentUrl!: string;
  heroVideoUrl!: SafeResourceUrl;
  csrVideoUrl!: SafeResourceUrl;



  faqs = [
    { q: 'What food is provided?', a: 'We provide balanced, freshly cooked meals specifically formulated for stray animals, ensuring high nutrition.' },
    { q: 'Can I choose a specific location?', a: 'Currently, we distribute based on areas with the highest concentration of stray animals in our target cities.' },
    { q: 'Will I get proof?', a: 'Yes! We share video/photo proof of the feeding session via your registered contact details.' }
  ];

  processSteps = [
    { icon: 'payments', title: 'Receiving Donations', desc: 'We accept support from anyone who wants to help through our online platform.' },
    { icon: 'inventory_2', title: 'Preparing and Packing', desc: 'Our team prepares nutritious meals and packs them carefully for distribution.' },
    { icon: 'delivery_dining', title: 'Feeding and Distribution', desc: 'Volunteers ensure your support reaches stray dogs safely and on time.' },
    { icon: 'verified', title: '100% Transparency', desc: 'We share photo/video updates so you can see the impact of your donation.' }
  ];

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private formBuilder: FormBuilder,
    public dial: MatDialog,
    public router: Router,
    public snackbar: MatSnackBar,
    public donationService: GeneralDonationPaymentService,
    public seoService: SeoService,
    private metaTagService: MetaTagService,
    private sanitizer: DomSanitizer
  ) {
    super(dial, snackbar, platformId);
    if (isPlatformBrowser(this.platformId)) {
      this.source = localStorage.getItem('spl_source');
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }

    this.initForm();
    this.updateMetaTags();
    this.setCanonicalUrl();
    this.heroVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/wx8bDt6Qz8g');
    this.csrVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/KjxvC3M0mRM');
  }

  initForm() {
    this.donationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      amount: ['', [Validators.required, Validators.min(1)]],
      panNumber: [{ value: '', disabled: true }],
      aadharNumber: [{ value: '', disabled: true }],
      address: [{ value: '', disabled: true }],
      taxBenefits: [false]
    });

    this.donationForm.get('taxBenefits')?.valueChanges.subscribe((checked) => {
      const controls = ['panNumber', 'aadharNumber', 'address'];
      controls.forEach(controlName => {
        const control = this.donationForm.get(controlName);
        if (checked) {
          control?.enable();
          control?.setValidators([Validators.required]);
        } else {
          control?.disable();
          control?.clearValidators();
        }
        control?.updateValueAndValidity();
      });
    });
  }

  onSubmit(): void {
    if (this.donationForm.valid) {
      this.presentLoader();

      const formValues = this.donationForm.value;
      let params: any = {
        billing_name: formValues.name,
        billing_email: formValues.email,
        billing_tel: formValues.phone,
        amount: formValues.amount,
        is_pawandplates: 'true'
      };

      if (this.source) {
        params.source = this.source || 'default';
      }

      if (formValues.taxBenefits) {
        params.pan_number = formValues.panNumber;
        params.aadhar_number = formValues.aadharNumber;
        params.address = formValues.address;
      }

      this.donationService.getData(params).subscribe({
        next: (response: any) => {
          this.dismissLoader();
          if (response?.final_url) {
            if (isPlatformBrowser(this.platformId)) {
              window.location.href = response.final_url;
            }
          } else {
            this.somethingWentWrong();
          }
        },
        error: (err) => {
          console.error('Payment Error:', err);
          this.dismissLoader();
          this.somethingWentWrong();
        }
      });
    } else {
      this.snackbar.open('Please fill all required fields correctly', 'Close', { duration: 3000 });
    }
  }

  scrollToForm() {
    const element = document.getElementById('paws-donation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  updateMetaTags() {
    this.metaTagService.updateMetaTags({
      title: 'Paws & Plates - Feed the Voiceless | Pephands Foundation',
      keywords: 'pet donation, feed street dogs, animal welfare india, paws and plates, pephands foundation',
      ogTitle: 'Paws & Plates - Feed the Voiceless',
      description: 'Join Paws & Plates to feed street dogs and cats. Your small contribution can provide a nutritious meal to a voiceless soul.',
      ogImage: 'assets/paws-and-plates-hero.png',
    });
  }

  setCanonicalUrl() {
    this.seoService.createLinkForCanonicalURL();
  }
}
