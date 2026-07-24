import { ChangeDetectorRef } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../Providers/seo.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ich-center',
  imports: [CommonModule, RouterModule, SlickCarouselModule],
  templateUrl: './ich-center.html',
  styleUrl: './ich-center.scss',
})
export class IchCenter implements OnInit {

  slickConfig = {
    slidesToShow: 1, // Number of cards shown at once
    slidesToScroll: 1,
    dots: true,
    arrows: true, // Show navigation dots
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 4400,
        settings: {
          centerPadding: '10px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 3400,
        settings: {
          centerPadding: '10px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 2400,
        settings: {
          centerPadding: '10px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          centerPadding: '10px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          centerPadding: '10px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          centerPadding: '10px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          centerPadding: '10px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '10px',
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 992,
        settings: {
          centerPadding: '10px',
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          centerPadding: '10px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '10px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 280,
        settings: {
          centerPadding: '10px',
          slidesToShow: 1,
        },
      },
    ],
  };

      currentIndex = 0;
  images = [
    '/ich/ICH1.jpg',
    '/ich/ICH2.jpg',
    '/ich/ICH3.jpg',
    '/ich/ICH4.jpg',
    '/ich/ICH5.jpg',
    '/ich/ICH6.jpg',
    '/ich/ICH7.jpg',
    '/ich/ICH8.jpg',
    '/ich/ICH9.jpg',
    '/ich/ICH10.jpg',
  ];
  constructor(private seoService: SeoService, private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.cdr.detectChanges();
    }, 4000);

    this.seoService.updateMetaTags({
      title: 'Ich Center',
      description: 'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
      image: '/logos/pephands-foundation.png',
      keywords: 'Pephands Foundation, ngo, charity, ich center'
    });
  }

}