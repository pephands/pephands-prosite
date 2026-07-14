import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BasePageComponent } from '../../pages/base';
import { VolunteerService } from '../../Providers/volunteer.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-volunteer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './volunteer-form.html',
  styleUrl: './volunteer-form.css',
})
export class VolunteerForm extends BasePageComponent {
  volunteerForm!: FormGroup;

  districts = [
    { name: 'Ariyalur', value: 'ariyalur' },
    { name: 'Chengalpattu', value: 'chengalpattu' },
    { name: 'Chennai', value: 'Chennai' },
    { name: 'Coimbatore', value: 'Coimbatore' },
    { name: 'Cuddalore', value: 'Cuddalore' },
    { name: 'Dharmapuri', value: 'Dharmapuri' },
    { name: 'Dindigul', value: 'Dindigul' },
    { name: 'Erode', value: 'Erode' },
    { name: '	Kallakurichi', value: '	Kallakurichi' },
    { name: '	Kanchipuram', value: '	Kanchipuram' },
    { name: 'Kanniyakumari', value: 'Kanniyakumari' },
    { name: 'Karur', value: 'Karur' },
    { name: 'Krishnagiri', value: 'Krishnagiri' },
    { name: 'Madurai', value: 'Madurai' },
    { name: 'Mayiladuthurai', value: 'Mayiladuthurai' },
    { name: 'Nagapattinam', value: 'Nagapattinam' },
    { name: '	Namakkal', value: '	Namakkal' },
    { name: '	Nilgiris', value: '	Nilgiris' },
    { name: '		Perambalur', value: '		Perambalur' },
    { name: '	Pudukkottai', value: '	Pudukkottai' },
    { name: 'Ramanathapuram', value: '	Ramanathapuram' },
    { name: '	Ranipet', value: '	Ranipet' },
    { name: 'Salem', value: '	Salem' },
    { name: '	Sivagangai', value: 'Sivagangai' },
    { name: '	Tenkasi', value: '	Tenkasi' },
    { name: '	Thanjavur', value: '	Thanjavur' },
    { name: '	Theni', value: '	Theni' },
    { name: '	Thoothukudi', value: '	Thoothukudi' },
    { name: 'Tiruchirappalli', value: '	Tiruchirappalli' },
    { name: 'Tirunelveli', value: 'Tirunelveli' },
    { name: '		Tirupathur', value: 'Tirupathur' },
    { name: '	Tiruppur', value: '	Tiruppur' },
    { name: '	Tiruvallur', value: '	Tiruvallur' },
    { name: '	Tiruvannamalai', value: '	Tiruvannamalai' },
    { name: '	 Nilgiris', value: '	 Nilgiris' },
    { name: '	Tiruvarur', value: '	Tiruvarur' },
    { name: '	Vellore', value: '	Vellore' },
    { name: '	Viluppuram', value: '	Viluppuram' },
    { name: '	Virudhunagar', value: '	Virudhunagar' },
  ];

  constructor(
    public volunteerService: VolunteerService,
    public dlg: MatDialog,
    public snack: MatSnackBar,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    super(dlg, snack, platformId);
  }

  ngOnInit(): void {
    this.volunteerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      district: new FormControl('', [Validators.required]),
    });
    this.volunteerForm.reset();
  }
  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    const numbersOnly = inputValue.replace(/[^0-9]/g, '');
    const maxLength = 10;
    inputElement.value = numbersOnly.slice(0, maxLength);
    this.volunteerForm.patchValue({ contactNumber: inputElement.value });
  }

  validateVolunteerForm(): void {
    if (!this.volunteerForm.valid) {
      this.validationFailed('Please fill in all the required fields');
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
      name: this.volunteerForm.controls['name'].value,
      email: this.volunteerForm.controls['email'].value,
      phone_no: this.volunteerForm.controls['phone'].value,
      district: this.volunteerForm.controls['district'].value,
    };

    this.volunteerService.getData(params).subscribe(
      (response: any) => {
        this.volunteerForm.reset();
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
