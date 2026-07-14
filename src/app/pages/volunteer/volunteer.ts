import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerForm } from '../../components/volunteer-form/volunteer-form';
@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [CommonModule, VolunteerForm],
  templateUrl: './volunteer.html',
  styleUrl: './volunteer.css',
})
export class Volunteer implements OnInit, OnDestroy {
  testimonials = [
    {
      name: 'Harini NMS',
      message: `Happy to be the part of this organisation. And they made my big day much blessed. Thank you so much team.`,
      image: '/volunteer-testimonials/Harini NMS.png',
    },
    {
      name: 'Merlin Rajendran',
      message: `I did not have any idea that I'm going to take this volunteering thing this seriously. All credit to the team and their genuine efforts. It's my pleasure to be a part of the Pephands fam 💯`,
      image: '/volunteer-testimonials/Merlin.png',
    },
    {
      name: 'Aishwaryaa A',
      message: `Thanks team for your efforts which makes me more happy 😊`,
      image: '/volunteer-testimonials/aiswaryaa.png',
    },
    {
      name: 'MaEarth art studio',
      message: `Employees of Pep Hands are very good, very helpful and spontaneous. Mr. Sinoj and Mr. Hari Prasad of ( IT team) has donated o positive blood for my father, who is hospitalized in Billroth hospital Shenoy Nagar. I thank both of them for the timely help , May God bless both of them with good health and prosperity 🙏`,
      image: '/volunteer-testimonials/Ma earth art.png',
    },
    {
      name: 'Venkat Reddy',
      message: `Team doing a great job keep going ♥️ many more to go`,
      image: '/volunteer-testimonials/profile .png',
    },
    {
      name: 'Aruna Vs',
      message: `Had a good experience with this team…they honour their work as they are told..looking forward to work more with them in future..`,
      image: '/volunteer-testimonials/Aruna vs.png',
    },
  ];

  activeIndex = 0;
  isFading = false;
  intervalId: any;

  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.startRotation();
  }

  ngOnDestroy() {
    this.stopRotation();
  }

  startRotation() {
    this.intervalId = setInterval(() => {
      // Find the next index
      const nextIndex = (this.activeIndex + 1) % this.testimonials.length;
      this.selectTestimonial(nextIndex);
      this.cdr.detectChanges(); // ensure UI updates
    }, 3000);
  }

  stopRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getActiveTestimonial() {
    return this.testimonials[this.activeIndex];
  }

  selectTestimonial(index: number) {
    if (this.activeIndex === index || this.isFading) return;

    // If the user clicks manually, reset the rotation timer
    this.stopRotation();
    this.startRotation();

    this.isFading = true;
    setTimeout(() => {
      this.activeIndex = index;
      this.isFading = false;
      this.cdr.detectChanges();
    }, 300); // Wait for fade out animation
  }

  getSlotClass(index: number): string {
    const total = this.testimonials.length;
    // Calculate relative position based on active index
    // We want the active one to be 'pos-0', others to be 'pos-1', 'pos-2', 'pos--1' etc.
    let diff = index - this.activeIndex;

    // Normalize to handle wrapping (e.g. if active is 5, and index is 0, it should be pos-1 not pos--5)
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) return 'slot-active';
    if (diff === 1) return 'slot-next-1';
    if (diff === 2) return 'slot-next-2';
    if (diff === -1) return 'slot-prev-1';
    if (diff === -2) return 'slot-prev-2';

    return 'slot-hidden'; // For any extras
  }

  scrollToForm() {
    const formElement = document.getElementById('volunteer-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
