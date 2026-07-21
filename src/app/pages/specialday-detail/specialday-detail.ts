import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SpecialNotification } from '../../Models/notification';
import { SpecialCampaigns } from '../../Models/specialCampaigns';
import { MetaTagService } from '../../Providers/metaTag.service';
import { SpecialNotificationsService } from '../../Providers/notifications.service';
import { SeoService } from '../../Providers/seo.service';
import { FetchSpecialCampaignsListService } from '../../Providers/special-campaigns-list.service';
import { FetchSpecialDaysListService } from '../../Providers/special-days.service';
import { SpecialDonationBookingService } from '../../Providers/specialDonation.service';
import { BasePageComponent } from '../base';
import { MaterialModule } from '../../material.module';
import { SafeHtmlDirective } from '../../safe-html.directive';

@Component({
  selector: 'app-specialday-detail',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    SafeHtmlDirective,
  ],
  templateUrl: './specialday-detail.html',
  styleUrl: './specialday-detail.scss',
})
export class SpecialdayDetail extends BasePageComponent {
  specialUrl!: string;
  campaign!: SpecialCampaigns;
  specialDonationForm!: FormGroup;
  specialPersonImage: any;
  docSize: any;
  errormessage: string | undefined;
  amountPerUnit: number = 0;
  specialDays: any[] = [];
  paymentUrl!: string;
  spl_source!: string | null;
  notifications: SpecialNotification[] = [];
  isExpanded = false;
  minDate: Date = new Date();
  // Dates to disable (15,16,17,18 January 2026)
  disabledDates: Date[] = [
    new Date(2026, 0, 15),
    new Date(2026, 0, 16),
    new Date(2026, 0, 17),
    new Date(2026, 0, 18),
  ];

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    public campaignDetailService: FetchSpecialCampaignsListService,
    public specialDaysService: FetchSpecialDaysListService,
    public specialDayBookingService: SpecialDonationBookingService,
    public notificationsService: SpecialNotificationsService,
    public dial: MatDialog,
    public router: Router,
    public snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public seoService: SeoService,
    private metaTagService: MetaTagService,
  ) {
    super(dial, snackbar, platformId);
    if (isPlatformBrowser(this.platformId)) {
      this.spl_source = localStorage.getItem('spl_source');
    }
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

  // Date filter for mat-datepicker: returns false for disabled dates
  dateFilter = (d: Date | null): boolean => {
    if (!d) return false;
    const date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    return !this.disabledDates.some(
      (dd) =>
        dd.getFullYear() === date.getFullYear() &&
        dd.getMonth() === date.getMonth() &&
        dd.getDate() === date.getDate(),
    );
  };

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollContainers = [
        document.querySelector('mat-drawer-content'),
        document.querySelector('.content-wrapper'),
        document.documentElement,
        document.body,
      ];
      scrollContainers.forEach((container) => {
        if (container) {
          container.scrollTop = 0;
        }
      });
      window.scrollTo(0, 0);
    }
  }

  ngOnInit() {
    this.specialDonationForm = new FormGroup({
      donorName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z\\s.]+$'),
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      donorPhone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
        Validators.maxLength(10),
        Validators.minLength(10),
      ]),
      donorEmail: new FormControl('', [Validators.required, Validators.email]),
      panNumber: new FormControl('', [Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]),
      aadharNumber: new FormControl('', [Validators.pattern('^[0-9]{12}$')]),
      address: new FormControl('', [Validators.minLength(5), Validators.maxLength(100)]),
      donorInstaId: new FormControl(''),
      specialDay: new FormControl('', [Validators.required]),
      specialDate: new FormControl('', [Validators.required]),
      specialPersonName1: new FormControl('', [
        Validators.pattern('^[A-Za-z\\s]+$'),
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      specialPersonName2: new FormControl('', [
        Validators.pattern('^[A-Za-z\\s]+$'),
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      specialPersonImage: new FormControl(''),
      count: new FormControl(1),
      amount: new FormControl(0),

      customizedMessage: new FormControl(''),
      taxBenefits: new FormControl(''),
    });

    this.specialDonationForm.get('count')!.valueChanges.subscribe((val) => {
      this.calculateTotalAmount(); // Recalculate amount on count change
      const minCount = this.campaign?.minCount || 1;
      if (val !== null && val < minCount) {
        this.validationFailed(`minimum count to be booked : ${minCount}`);
      }
    });

    this.getNotifications();
    this.scrollToTop();

    this.route.paramMap.subscribe((params) => {
      this.scrollToTop();
      const specialUrl = params.get('specialUrl');

      if (specialUrl) {
        const initialCanonical = `https://pephands.org/donate/${specialUrl}`;
        this.seoService.createLinkForCanonicalURL(initialCanonical);
      }

      const queryParams = {
        url_desc: specialUrl,
      };
      this.presentLoader('Fetching Details...');
      this.campaignDetailService.getData(queryParams).subscribe({
        next: (response: any) => {
          const data = response && response.results ? response.results : response;
          if (!data || data.length === 0) {
            this.dismissLoader();
            this.router.navigate(['/404']);
            return;
          }
          this.campaign = new SpecialCampaigns().deserializer(data[0]);
          this.amountPerUnit = this.campaign.amount;
          const minCount = this.campaign.minCount || 1;
          this.specialDonationForm.controls['count'].setValidators([
            Validators.required,
            Validators.min(minCount),
          ]);
          this.specialDonationForm.controls['count'].setValue(minCount);
          this.specialDonationForm.controls['count'].updateValueAndValidity();
          this.calculateTotalAmount();
          this.dismissLoader();

          if (isPlatformBrowser(this.platformId)) {
            if (this.loader) {
              this.loader.afterClosed().subscribe(() => {
                this.scrollToTop();
              });
            }
            setTimeout(() => this.scrollToTop(), 100);
            setTimeout(() => this.scrollToTop(), 300);
          }

          this.updateMetaTags();
          this.setCanonicalUrl();
        },
        error: (err) => {
          console.error('Error fetching campaign details:', err);
          this.dismissLoader();
          this.router.navigate(['/404']);
        },
      });
    });

    this.fetchSpecialDays();
  }

  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }

  scrollToForm() {
    if (typeof document !== 'undefined') {
      const element = document.getElementById('donationForm');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  onSpecialPersonImageSelected(event: any, isGovtProof: boolean): void {
    this.docSize = event.target.files[0].size;
    if (this.docSize > 500000) {
      this.docSize = undefined;
      this.validationFailed('Image must be less than 500kb');
      return;
    }
    this.specialPersonImage = event.target.files[0];
  }

  validationFailed(message: string): void {
    this.errormessage = message;
    setTimeout(() => {
      this.errormessage = '';
    }, 6000);
  }

  incrementCount() {
    if (this.specialDonationForm.get('count')?.value !== null) {
      this.specialDonationForm
        .get('count')!
        .setValue(this.specialDonationForm.get('count')!.value + 1);
    }
  }

  decrementCount() {
    const currentCount = this.specialDonationForm.get('count')?.value;
    const minCount = this.campaign?.minCount || 1;
    if (currentCount !== null && currentCount > minCount) {
      this.specialDonationForm.get('count')!.setValue(currentCount - 1);
    } else {
      this.specialDonationForm.get('count')!.setErrors({ min: true });
      this.specialDonationForm.get('count')!.markAsTouched();
      this.validationFailed(`minimum count to be booked : ${minCount}`);
    }
  }

  calculateTotalAmount() {
    const count = this.specialDonationForm.get('count')!.value;
    this.specialDonationForm.get('amount')!.setValue(count * this.amountPerUnit);
  }

  fetchSpecialDays() {
    this.specialDaysService.getData().subscribe(
      (response: any) => {
        this.specialDays = response;
      },
      (error) => {
        console.error('Error fetching special days:', error);
      },
    );
  }

  validateForm(): void {
    if (!this.specialDonationForm.controls['donorName'].valid) {
      this.validationFailed('Please Enter a Valid Name. Numbers, Special Characters Not Allowed');
      return;
    }
    if (!this.specialDonationForm.controls['donorPhone'].valid) {
      this.validationFailed('Please Enter a Valid Contact Number');
      return;
    }
    if (!this.specialDonationForm.controls['donorEmail'].valid) {
      this.validationFailed('Please Enter a Valid Email');
      return;
    }
    if (!this.specialDonationForm.controls['specialDate'].valid) {
      this.validationFailed('Please Select a Valid date to donate');
      return;
    }
    if (!this.specialDonationForm.controls['specialDay'].valid) {
      this.validationFailed('Please Select a special Occasion');
      return;
    }
    if (!this.specialDonationForm.controls['donorInstaId'].valid) {
      this.validationFailed('Please Enter a Valid Insta Id');
      return;
    }
    if (!this.specialDonationForm.controls['count'].valid) {
      this.validationFailed(`minimum count to booked : ${this.campaign?.minCount || 1}`);
      return;
    }
    if (!this.specialDonationForm.controls['specialPersonName1'].valid) {
      this.validationFailed('Enter a Valid Name. Numbers, Special Characters Not Allowed');
      return;
    }
    if (!this.specialDonationForm.controls['specialPersonName2'].valid) {
      this.validationFailed('Please Enter a Valid Name. Numbers, Special Characters Not Allowed');
      return;
    }

    if (!this.specialDonationForm.controls['panNumber'].valid) {
      this.validationFailed('Please Enter a Valid PAN Number');
      return;
    }
    if (!this.specialDonationForm.controls['aadharNumber'].valid) {
      this.validationFailed('Please Enter a Valid Aadhar Number');
      return;
    }
    if (!this.specialDonationForm.controls['address'].valid) {
      this.validationFailed('Please Enter a Valid Address');
      return;
    }

    this.submitForm();
  }

  submitForm() {
    if (this.specialDonationForm.valid) {
      this.presentLoader();
      let params: FormData = new FormData();
      params.append('name', this.specialDonationForm.controls['donorName'].value);
      params.append('phone', this.specialDonationForm.controls['donorPhone'].value);
      params.append('email', this.specialDonationForm.controls['donorEmail'].value);

      if (this.specialDonationForm.controls['panNumber'].value) {
        params.append('pan_number', this.specialDonationForm.controls['panNumber'].value || '');
      }

      if (this.specialDonationForm.controls['aadharNumber'].value) {
        params.append(
          'aadhar_number',
          this.specialDonationForm.controls['aadharNumber'].value || '',
        );
      }

      if (this.specialDonationForm.controls['address'].value) {
        params.append('address', this.specialDonationForm.controls['address'].value || '');
      }
      params.append('insta_id', this.specialDonationForm.controls['donorInstaId'].value || '');
      params.append('reason', this.specialDonationForm.controls['specialDay'].value);

      params.append(
        'special_date',
        this.formattedDate(this.specialDonationForm.controls['specialDate'].value),
      );
      params.append('campaign', this.campaign.id.toString());
      params.append(
        'person_1_name',
        this.specialDonationForm.controls['specialPersonName1'].value || '',
      );
      params.append(
        'person_2_name',
        this.specialDonationForm.controls['specialPersonName2'].value || '',
      );

      params.append('special_person_image', this.specialPersonImage || '');
      params.append('count', this.specialDonationForm.controls['count'].value);
      params.append('amount', this.specialDonationForm.controls['amount'].value);
      if (this.spl_source) {
        params.append('source', this.spl_source);
      }
      if (!this.spl_source) {
        params.append('source', 'default');
      }

      this.specialDayBookingService.getData(params).subscribe(
        (response: any) => {
          this.paymentUrl = response.final_url;
          if (isPlatformBrowser(this.platformId)) {
            window.location.href = this.paymentUrl;
            this.specialDonationForm.reset();
            this.dismissLoader();
          }
        },
        (err) => {
          this.dismissLoader();
          this.somethingWentWrong();
        },
      );
    }
  }

  formattedDate(dobValue: any) {
    const dobDate = new Date(dobValue);

    // Extract year, month, and day components from the Date object
    const year = dobDate.getFullYear();
    const month = String(dobDate.getMonth() + 1).padStart(2, '0');
    const day = String(dobDate.getDate()).padStart(2, '0');

    // Create the formatted date string in the format "yyyy-mm-dd"
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

  getNotifications() {
    this.notificationsService.getData().subscribe((response: any) => {
      let messages: any = response;
      this.notifications = [];

      if (messages && messages.length) {
        messages.forEach((message: any) => {
          this.notifications.push(new SpecialNotification().deserialize(message));
        });
        this.showNotifications();
      }
    });
  }

  showNotifications(): void {
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        // Pick a random notification
        const randomIndex = Math.floor(Math.random() * this.notifications.length);
        const randomNotification = this.notifications[randomIndex];

        // Show the random notification
        this.openSnackBar(randomNotification.message);
      }, this.generateRandomDelay());
    }
  }

  openSnackBar(message: string): void {
    const config = new MatSnackBarConfig();
    config.duration = 4000; // Duration in milliseconds
    config.verticalPosition = 'bottom'; // Position at the top
    config.panelClass = 'custom-snackbar'; // Add custom CSS class
    this.snackBar.open(message, 'Close', config);
  }

  generateRandomDelay(): number {
    // Adjust the range as per your preference
    const minDelay = 10000; // 1 second
    const maxDelay = 40000; // 5 seconds
    return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
  }

  updateMetaTags() {
    const canonicalUrl = `https://pephands.org/donate/${this.campaign.urlDesc}`;
    this.metaTagService.updateMetaTags({
      title: this.campaign.meta_title,
      keywords:
        'Pan-India charity organization, Non-profit foundation in India, Welfare organization across India, Nationwide charity drive, Special day giving nationwide, Celebrate with charity across India, Donate for a cause nationwide, Charity events in India, Philanthropy nationwide, Impactful giving in India, Spread kindness nationwide, Volunteer opportunities across India, Community outreach pan-India, Empowerment through charity nationwide, Giving back to society in India, Social responsibility across India, Support charitable causes nationwide, Nationwide fundraising events, Make a difference nationwide, Charity initiatives pan-India',
      ogTitle: this.campaign.meta_title,
      twitterTitle: this.campaign.meta_title,
      ogImage: this.campaign.displayImage,
      twitterImage: this.campaign.displayImage,
      description:
        this.campaign.meta_description ||
        this.campaign.description ||
        'Celebrate your special day by spreading joy with Pephands Foundation.',
      ogDescription:
        this.campaign.meta_description ||
        this.campaign.description ||
        'Celebrate your special day by spreading joy with Pephands Foundation.',
      twitterDescription:
        this.campaign.meta_description ||
        this.campaign.description ||
        'Celebrate your special day by spreading joy with Pephands Foundation.',
      ogUrl: canonicalUrl,
      twitterUrl: canonicalUrl,
      ogImageWidth: '1920px',
      ogImageHeight: '1080px',
    });
  }

  setCanonicalUrl() {
    if (this.campaign) {
      const canonical = `https://pephands.org/donate/${this.campaign.urlDesc}`;
      this.seoService.createLinkForCanonicalURL(canonical);
    }
  }

  isImagePopupVisible = false;

  toggleImagePopup() {
    this.isImagePopupVisible = !this.isImagePopupVisible;
  }
}
