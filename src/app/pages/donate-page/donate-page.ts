import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { GeneralDonationPaymentService } from '../../Providers/generalDonations.service';
import { MetaTagService } from '../../Providers/metaTag.service';
import { SeoService } from '../../Providers/seo.service';
import { BasePageComponent } from '../base';
import { HomeCarefund } from '../../components/home-carefund/home-carefund';
import { HomeSpecialday } from '../../components/home-specialday/home-specialday';
import { HomeEducation } from '../../components/home-education/home-education';
import { HomeMedical } from '../../components/home-medical/home-medical';

@Component({
  selector: 'app-donate-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    HomeCarefund,
    HomeSpecialday,
    HomeEducation,
    HomeMedical,
  ],
  templateUrl: './donate-page.html',
  styleUrl: './donate-page.scss',
})
export class DonatePage extends BasePageComponent {
  donationForm!: FormGroup;
  source!: string | null;
  paymentUrl!: string;

  impacts = [
    '/payment/AnimalWelfare.png',
    '/payment/Clean Water.png',
    '/payment/Cleft Surgeries.png',
    '/payment/CommunityDevelopment.png',
    '/payment/Education.png',
    '/payment/Medical.png',
    '/payment/PalliativeCare.png',
    '/payment/SuperMom.png',
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
  ) {
    super(dial, snackbar, platformId);
    if (isPlatformBrowser(this.platformId)) {
      this.source = localStorage.getItem('spl_source');
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    this.donationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      amount: ['', [Validators.required, this.amountValidator]], // Adjust validators as needed
      panNumber: [{ value: '', disabled: true }, [Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      aadharNumber: [{ value: '', disabled: true }, [Validators.pattern('^[0-9]{12}$')]],
      address: [
        { value: '', disabled: true },
        [Validators.minLength(5), Validators.maxLength(200)],
      ],
      taxBenefits: [false],
    });

    this.donationForm.get('taxBenefits')?.valueChanges.subscribe((checked) => {
      if (checked) {
        this.donationForm.get('panNumber')?.enable();
        this.donationForm.get('aadharNumber')?.enable();
        this.donationForm.get('address')?.enable();
        this.donationForm
          .get('panNumber')
          ?.setValidators([Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]);
        this.donationForm
          .get('aadharNumber')
          ?.setValidators([Validators.required, Validators.pattern('^[0-9]{12}$')]);
        this.donationForm
          .get('address')
          ?.setValidators([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(200),
          ]);
      } else {
        this.donationForm.get('panNumber')?.disable();
        this.donationForm.get('aadharNumber')?.disable();
        this.donationForm.get('address')?.disable();
        this.donationForm.get('panNumber')?.clearValidators();
        this.donationForm.get('aadharNumber')?.clearValidators();
        this.donationForm.get('address')?.clearValidators();
      }
      this.donationForm.get('panNumber')?.updateValueAndValidity();
      this.donationForm.get('aadharNumber')?.updateValueAndValidity();
      this.donationForm.get('address')?.updateValueAndValidity();
    });
    this.updateMetaTags();
    this.setCanonicalUrl();
  }

  amountValidator(control: AbstractControl): { [key: string]: any } | null {
    const amount = control.value;
    if (amount !== null && (isNaN(amount) || amount < 0)) {
      return { invalidAmount: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.donationForm.valid) {
      this.presentLoader();

      let params: any = {
        billing_name: this.donationForm.controls['name'].value,
        billing_email: this.donationForm.controls['email'].value,
        billing_tel: this.donationForm.controls['phone'].value,
        amount: this.donationForm.controls['amount'].value,
        source: this.source || 'foundation',
      };

      // Include tax benefit details only if selected
      if (this.donationForm.controls['taxBenefits'].value) {
        params.pan_number = this.donationForm.controls['panNumber'].value || '';
        params.aadhar_number = this.donationForm.controls['aadharNumber'].value || '';
        params.address = this.donationForm.controls['address'].value || '';
      }

      this.donationService.getData(params).subscribe(
        (response: any) => {
          this.paymentUrl = response.final_url;
          if (isPlatformBrowser(this.platformId)) {
            window.location.href = this.paymentUrl;
          }
          this.dismissLoader();
          this.donationForm.reset();
        },
        (err) => {
          console.log(err);
          this.dismissLoader();
          this.somethingWentWrong();
        },
      );
    }
  }

  updateMetaTags() {
    this.metaTagService.updateMetaTags({
      title: 'Donate - Pephands Foundation',
      keywords:
        'Pan-India charity organization, Non-profit foundation in India, Welfare organization across India, Nationwide charity drive, Special day giving nationwide, Celebrate with charity across India, Donate for a cause nationwide, Charity events in India, Philanthropy nationwide, Impactful giving in India, Spread kindness nationwide, Volunteer opportunities across India, Community outreach pan-India, Empowerment through charity nationwide, Giving back to society in India, Social responsibility across India, Support charitable causes nationwide, Nationwide fundraising events, Make a difference nationwide, Charity initiatives pan-India',
      ogTitle: 'Donate - Pephands Foundation',
      twitterTitle: 'Donate - Pephands Foundation',
      ogImage: 'https://pephands.org/assets/logos/pephands-foundation.png',
      twitterImage: 'https://pephands.org/assets/logos/pephands-foundation.png',
      description:
        'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
    });
  }

  setCanonicalUrl() {
    this.seoService.createLinkForCanonicalURL();
  }
}
