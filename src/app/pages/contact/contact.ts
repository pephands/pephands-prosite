import { SeoService } from '../../Providers/seo.service';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from '../base';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactUsService } from '../../Providers/contact-us.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact extends BasePageComponent implements OnInit {
  contactForm!: FormGroup;
  errorMessage!: string;

  constructor(
    private seoService: SeoService,
    public contactUsService: ContactUsService,
    @Inject(PLATFORM_ID) platformId: Object,
    public dlg: MatDialog,
    public snack: MatSnackBar,
  ) {
    super(dlg, snack, platformId);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.seoService.updateMetaTags({
        title: 'Contact',
        description:
          'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
        image: '/logos/pephands-foundation.png',
        keywords: 'Pephands Foundation, ngo, charity, contact',
      });
    }

    this.contactForm = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      details: new FormControl('', [
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(500),
      ]),
    });
  }

  validateContactForm(): void {
    if (!this.contactForm.controls['fullName'].valid) {
      this.validationFailed('Please enter your full name');
      return;
    }
    if (!this.contactForm.controls['email'].valid) {
      this.validationFailed('Please enter your Email address');
      return;
    }
    if (!this.contactForm.controls['phone'].valid) {
      this.validationFailed('Please enter your mobile number');
      return;
    }
    if (!this.contactForm.controls['details'].valid) {
      this.validationFailed('Please enter your comments or queries. Minimum of 50 Characters');
      return;
    }
    this.submitForm();
  }

  validationFailed(message: string): void {
    this.showFailureNotification(message);
  }

  submitForm(): void {
    this.presentLoader();
    let params = {
      name: this.contactForm.controls['fullName'].value,
      email: this.contactForm.controls['email'].value,
      mobile: this.contactForm.controls['phone'].value,
      details: this.contactForm.controls['details'].value,
    };
    this.contactUsService.getData(params).subscribe(
      (response: any) => {
        this.contactForm.reset();
        this.dismissLoader();
        this.textAlert('Submitted', 'Thank you for reaching us, we will get back to you soon.');
      },
      (err: any) => {
        this.dismissLoader();
        this.somethingWentWrong();
      },
    );
  }
}
