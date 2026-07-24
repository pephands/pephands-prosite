import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Banner {
  title: string;
  highlight: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink?: string;
  secondaryCtaText: string;
  secondaryCtaLink?: string;
  imageUrl: string;
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
      title: 'Run For Life 2026',
      highlight: 'Say NO to Drugs',
      description:
        'Over 1500+ runners joined hands with Pephands Foundation in Chennai to spread awareness and empower lives through our 5K & 3K marathon.',
      primaryCtaText: 'Explore Marathon',
      primaryCtaLink: '/run-for-life-marathon',
      secondaryCtaText: 'View Gallery',
      secondaryCtaLink: '/run-for-life-marathon-gallery',
      imageUrl: '/marathon26/marathon.png',
      themeClass: 'theme-primary',
    },
    {
      title: 'Feed a Stray,',
      highlight: 'Save a Life',
      description:
        'Thousands of stray animals go hungry every day. Your small contribution can provide them with a full meal and a wagging tail.',
      primaryCtaText: 'Donate Food',
      primaryCtaLink: '/donate/paws-and-plates',
      secondaryCtaText: 'Learn More',
      secondaryCtaLink: '/donate/paws-and-plates',
      imageUrl:
        'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1000',
      themeClass: 'theme-magenta',
    },
    {
      title: 'Empower Kids Through',
      highlight: 'Education',
      description:
        'Education is the key to breaking the cycle of poverty. Help us provide study kits, books, and tuition fees for underprivileged children.',
      primaryCtaText: 'Sponsor a Child',
      primaryCtaLink: '/causes/education',
      secondaryCtaText: 'Our Impact',
      secondaryCtaLink: '/causes/education',
      imageUrl:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000',
      themeClass: 'theme-primary',
    },
    {
      title: 'Planting Hope for',
      highlight: 'a Greener Tomorrow',
      description:
        'Join our initiative to plant trees and restore our environment. A sustainable future starts with the seeds we plant today.',
      primaryCtaText: 'Join Campaign',
      primaryCtaLink: '/events',
      secondaryCtaText: 'See Progress',
      secondaryCtaLink: '/about-us',
      imageUrl:
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
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
