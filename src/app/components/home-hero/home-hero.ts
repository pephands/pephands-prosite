import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Banner {
  title: string;
  highlight: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  imageUrl: string;
  maskType: 'paw' | 'arch' | 'petal' | 'blob';
  themeClass: string;
}

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css',
})
export class HomeHero implements OnInit, OnDestroy {
  banners: Banner[] = [
    {
      title: 'Feed a Stray,',
      highlight: 'Save a Life',
      description:
        'Thousands of stray animals go hungry every day. Your small contribution can provide them with a full meal and a wagging tail.',
      primaryCtaText: 'Donate Food',
      secondaryCtaText: 'Learn More',
      imageUrl:
        'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1000',
      maskType: 'paw',
      themeClass: 'theme-magenta',
    },
    {
      title: 'Empower Kids Through',
      highlight: 'Education',
      description:
        'Education is the key to breaking the cycle of poverty. Help us provide study kits, books, and tuition fees for underprivileged children.',
      primaryCtaText: 'Sponsor a Child',
      secondaryCtaText: 'Our Impact',
      imageUrl:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000',
      maskType: 'arch',
      themeClass: 'theme-primary',
    },
    {
      title: 'Planting Hope for a',
      highlight: 'Greener Tomorrow',
      description:
        'Join our initiative to plant trees and restore our environment. A sustainable future starts with the seeds we plant today.',
      primaryCtaText: 'Join Campaign',
      secondaryCtaText: 'See Progress',
      imageUrl:
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
      maskType: 'petal',
      themeClass: 'theme-gold',
    },
  ];

  currentIndex = 0;
  private intervalId: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private zone: NgZone,
  ) {}

  ngOnInit() {
    this.startRotation();
  }

  ngOnDestroy() {
    this.stopRotation();
  }

  startRotation() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.banners.length;
      this.cdr.detectChanges();
    }, 4000);
  }

  stopRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setSlide(index: number) {
    this.currentIndex = index;
    this.cdr.detectChanges();
    this.stopRotation();
    this.startRotation(); // Reset timer
  }
}
