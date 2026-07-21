import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MetaTagService } from '../../Providers/metaTag.service';
import { SeoService } from '../../Providers/seo.service';

@Component({
  selector: 'app-marathon-2026',
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './marathon-2026.html',
  styleUrl: './marathon-2026.scss',
})
export class Marathon2026 {
  activeVideoIndex: number = 0;
  isPlaying: boolean = false;
  currentTime: string = '09:41';
  safeVideoUrl!: SafeResourceUrl;
  private timerId: any;

  activeTestimonialIndex: number = 0;
  private testimonialTimer: any;
  testimonialBgImage: string =
    '/marathon-success-2026/run-for-life-chennai-marathon-2026-participants.jpg';

  mediaCoverage: {
    channelName: string;
    youtubeId?: string;
    thumbnail?: string;
    isPlaying: boolean;
    safeUrl: SafeResourceUrl | null;
    isLocal?: boolean;
    videoUrl?: string;
    logoClass: string;
    type?: 'image';
    imageUrl?: string;
    pdfUrl?: string;
  }[] = [
    {
      channelName: 'Polimer News',
      youtubeId: 'acpHUo8SLw8',
      thumbnail: 'https://img.youtube.com/vi/acpHUo8SLw8/hqdefault.jpg',
      isPlaying: false,
      safeUrl: null,
      logoClass: 'polimer',
    },
    {
      channelName: 'News Tamil 24x7',
      youtubeId: 'U0V0t-fr02I',
      thumbnail: 'https://img.youtube.com/vi/U0V0t-fr02I/hqdefault.jpg',
      isPlaying: false,
      safeUrl: null,
      logoClass: 'newstamil',
    },
    {
      channelName: 'Sun News',
      isLocal: true,
      videoUrl: '/marathon-success-2026/Sun-News.mp4',
      isPlaying: true,
      safeUrl: null,
      logoClass: 'sunnews',
    },
    {
      channelName: 'Dinamalar Coverage',
      isPlaying: false,
      safeUrl: null,
      logoClass: 'default',
      type: 'image',
      imageUrl: '/marathon-success-2026/malaimalar-news.png',
      pdfUrl:
        '/marathon-success-2026/malaimalar-news-about-pephands-run-for-life-marathon-2026.pdf',
    },
  ];

  playMediaVideo(video: any) {
    this.mediaCoverage.forEach((item) => {
      if (item !== video) {
        item.isPlaying = false;
      }
    });
    video.isPlaying = true;
    video.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&controls=1&modestbranding=1`,
    );
  }

  stopMediaVideo(video: any) {
    video.isPlaying = false;
  }

  videos = [
    {
      title: 'Massive Crowd, Zumba & Warmup Energy',
      youtubeId: 'Vp8M1Kz0dgE',
      thumbnail: 'https://img.youtube.com/vi/Vp8M1Kz0dgE/hqdefault.jpg',
      duration: '0:35',
    },
    {
      title: 'Flag-Off, Runners in Action & Medals',
      youtubeId: 'WjsAafz0eQ8',
      thumbnail: 'https://img.youtube.com/vi/WjsAafz0eQ8/hqdefault.jpg',
      duration: '0:45',
    },
  ];

  testimonials = [
    {
      id: 1,
      name: 'Shahid K',
      role: 'Marathon Runner',
      quote:
        'It was an amazing experience and happy to be a part of this marathon ❤️. Organising was really good and pre and post marathon vibe. Looking for the next marathon ahead 😊😁',
      rating: 5,
      pledge: 'Run for health, say no to drugs',
      gradient: 'linear-gradient(135deg, #5b1a6b 0%, #a6266f 100%)',
      initials: 'SK',
      bgImage: '/marathon-success-2026/3x/Artboard 14@3x-100.jpg',
    },
    {
      id: 2,
      name: 'Surya G',
      role: 'Fitness Enthusiast',
      quote: "It's really a good experience. The energy and organization were top-notch.",
      rating: 5,
      pledge: 'Say NO to drugs, YES to life!',
      gradient: 'linear-gradient(135deg, #a6266f 0%, #e8a33d 100%)',
      initials: 'SG',
      bgImage: '/marathon-success-2026/3x/Artboard 14@3x-100.jpg',
    },
    {
      id: 3,
      name: 'Amirtha Prasad',
      role: 'Awareness Advocate',
      quote:
        "Excellent awareness marathon promoting 'Say No to Drugs' among the younger generation. A great initiative encouraging fitness, health, and a drug-free future. Well organized and inspiring!",
      rating: 5,
      pledge: 'A drug-free future for our youth',
      gradient: 'linear-gradient(135deg, #5b1a6b 0%, #260f2e 100%)',
      initials: 'AP',
      bgImage: '/marathon-success-2026/3x/Artboard 14@3x-100.jpg',
    },
    {
      id: 4,
      name: 'Rithikesh 688',
      role: 'Participant',
      quote: 'Okay experience overall. Good crowd support and decent route management.',
      rating: 4,
      pledge: 'Keep moving forward',
      gradient: 'linear-gradient(135deg, #e8a33d 0%, #c98c34 100%)',
      initials: 'R',
      bgImage: '/marathon-success-2026/3x/Artboard 14@3x-100.jpg',
    },
    {
      id: 5,
      name: 'A Periya Samy',
      role: 'First-Time Marathoner',
      quote:
        'This is my first marathon in my marathon life. I want to complete a century of marathons in my future. Thanks a lot. Do it and support continue to make this. Love and thanks Pephands. Nice experience.',
      rating: 5,
      pledge: 'Running for a healthy tomorrow',
      gradient: 'linear-gradient(135deg, #5b1a6b 0%, #a6266f 100%)',
      initials: 'AS',
      bgImage: '/marathon-success-2026/3x/Artboard 14@3x-100.jpg',
    },
    {
      id: 6,
      name: 'Anaith A',
      role: '5K Runner',
      quote:
        'I had registered for timed 5k but did not get the time taken via whatsapp or mail. Not sure if the bib even had the timing chip, but extremely pretty medal, better than any of the marathons so far!',
      rating: 4,
      pledge: 'Running is its own reward',
      gradient: 'linear-gradient(135deg, #a6266f 0%, #e8a33d 100%)',
      initials: 'AA',
      bgImage: '/marathon-success-2026/3x/Artboard 14@3x-100.jpg',
    },
  ];

  constructor(
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object,
    private metaTagService: MetaTagService,
    private seoService: SeoService,
  ) {}

  ngOnInit() {
    this.seoService.createLinkForCanonicalURL();
    this.metaTagService.updateMetaTags({
      title: 'Run For Life Marathon in Chennai 2026 | Pephands Foundation',
      keywords:
        'Chennai marathon 2026, Run for Life, Say No to Drugs, Pephands Foundation marathon, 5k run Chennai',
      ogTitle: 'Run For Life Marathon in Chennai 2026 | Pephands Foundation',
      twitterTitle: 'Run For Life Marathon in Chennai 2026 | Pephands Foundation',
      description:
        'Discover the Run For Life Marathon in Chennai 2026, organised by Pephands Foundation to raise awareness about substance abuse, promote fitness, and inspire positive change through community participation.',
    });

    this.updateTime();
    if (isPlatformBrowser(this.platformId)) {
      this.timerId = setInterval(() => this.updateTime(), 1000);
    }
    this.updateSafeVideoUrl();
    this.startTestimonialAutoCycle();
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.stopTestimonialAutoCycle();
  }

  private updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    this.currentTime = `${hours}:${minutes}`;
  }

  selectVideo(index: number) {
    this.activeVideoIndex = index;
    this.isPlaying = false;
    this.updateSafeVideoUrl();
  }

  playVideo() {
    this.isPlaying = true;
  }

  nextVideo() {
    this.activeVideoIndex = (this.activeVideoIndex + 1) % this.videos.length;
    this.isPlaying = false;
    this.updateSafeVideoUrl();
  }

  prevVideo() {
    this.activeVideoIndex = (this.activeVideoIndex - 1 + this.videos.length) % this.videos.length;
    this.isPlaying = false;
    this.updateSafeVideoUrl();
  }

  updateSafeVideoUrl() {
    const youtubeId = this.videos[this.activeVideoIndex].youtubeId;
    this.safeVideoUrl = this.getSafeUrl(youtubeId);
  }

  getSafeUrl(youtubeId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&loop=1&playlist=${youtubeId}&controls=1&modestbranding=1&rel=0`,
    );
  }

  itinerary = [
    {
      time: '05:00 AM',
      title: 'Assembly & BIB Collection',
      desc: "Participants gathered at Olcott School Road, collected race BIBs, and runners' kits as the baggage counter opened.",
      icon: 'bi-qr-code-scan',
      accent: false,
    },
    {
      time: '05:30 AM',
      title: 'Zumba Warm-Up Session',
      desc: 'High-energy 30-minute Zumba warm-up session led by professional instructors got everyone ready.',
      icon: 'bi-lightning-charge-fill',
      accent: false,
    },
    {
      time: '05:45 AM',
      title: '5K Marathon Flag-Off',
      desc: 'The 5K run officially flagged off, with certified pacers guiding the runners along the course.',
      icon: 'bi-flag-fill',
      accent: true,
    },
    {
      time: '06:00 AM',
      title: '3K Marathon Flag-Off',
      desc: 'The 3K run commenced, with guides leading participants through the route to the finish line.',
      icon: 'bi-flag-fill',
      accent: true,
    },
    {
      time: '07:00 AM',
      title: 'Finisher Medals & Certificates',
      desc: 'Celebrated achievements at the main stage. Finisher medals, certificates, and refreshments were awarded to all.',
      icon: 'bi-trophy-fill',
      accent: false,
    },
  ];

  chiefGuests = [
    {
      name: 'Mr. Mohana Krishnan',
      role: 'President, Madras High Court Advocate Association & Co-Chairman, Bar Council of Tamilnadu & Puducherry',
      image: '/marathon-success-2026/3x/Mr Mohana Krishnan.jpg',
    },
    {
      name: 'Mr. Jagadeesan',
      role: 'City Health Officer, Greater Chennai Corporation',
      image: '/marathon-success-2026/3x/Mr Jagadeesan.jpg',
    },
  ];

  specialGuests = [
    {
      name: 'Mr. Maithreya',
      role: 'Actor',
      image: '/marathon-success-2026/3x/Mr Maithreya.jpg',
    },
    {
      name: 'Mr. Prashanth Raman',
      role: 'Film Director',
      image: '/marathon-success-2026/3x/Mr Prashanth Raman.jpg',
    },
    {
      name: 'Mr. Murali Radhakrishnan',
      role: 'Actor',
      image: '/marathon-success-2026/3x/Mr Murali Radhakrishnan.jpg',
    },
  ];

  scrollToAbout(event: Event) {
    event.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  galleryImages = [
    {
      src: '/marathon-success-2026/gallery-10.jpg',
      alt: 'Run For Life 5K Run Chennai Best Marathon Moments 2026',
    },
    {
      src: '/marathon-success-2026/gallery-8.jpg',
      alt: 'Marathon Volunteers and Winners Pephands Foundation Run For Life',
    },
    {
      src: '/marathon-success-2026/gallery-11.jpg',
      alt: 'Energetic Runners at Pephands Run For Life Event',
    },
    {
      src: '/marathon-success-2026/gallery-9.jpg',
      alt: 'Chennai Marathon 2026 Community Participation Anti-Drug Campaign',
    },

    {
      src: '/marathon-success-2026/gallery-1.jpg',
      alt: 'Run For Life 2026 Marathon Start Line Chennai - Anti Drug Awareness',
    },
    {
      src: '/marathon-success-2026/gallery-2.jpg',
      alt: '5K and 3K Runners at Run For Life Marathon 2026 in Besant Nagar',
    },
    {
      src: '/marathon-success-2026/gallery-3.jpg',
      alt: 'Pephands Foundation Marathon 2026 Participants Action Shot',
    },
    {
      src: '/marathon-success-2026/gallery-4.jpg',
      alt: 'Marathon Runners Cheering at Run For Life Chennai 2026',
    },
    {
      src: '/marathon-success-2026/gallery-5.jpg',
      alt: 'Finisher Medals Ceremony Run For Life Anti-Drug Marathon',
    },
    {
      src: '/marathon-success-2026/gallery-6.jpg',
      alt: 'Event Highlights of Chennai Marathon 2026 by Pephands',
    },
    {
      src: '/marathon-success-2026/gallery-7.jpg',
      alt: 'Run For Life 2026 Say No To Drugs Marathon Closing Event',
    },

    {
      src: '/marathon-success-2026/gallery-12.jpg',
      alt: 'Successful Conclusion of Run For Life Marathon 2026 Chennai',
    },
  ];

  startTestimonialAutoCycle() {
    this.stopTestimonialAutoCycle();
    if (isPlatformBrowser(this.platformId)) {
      this.testimonialTimer = setInterval(() => {
        this.activeTestimonialIndex = (this.activeTestimonialIndex + 1) % this.testimonials.length;
      }, 6000);
    }
  }

  stopTestimonialAutoCycle() {
    if (this.testimonialTimer) {
      clearInterval(this.testimonialTimer);
    }
  }

  selectTestimonial(index: number) {
    this.activeTestimonialIndex = index;
    this.startTestimonialAutoCycle(); // Reset timer
  }

  getPrevIndex(): number {
    return (this.activeTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  getNextIndex(): number {
    return (this.activeTestimonialIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.activeTestimonialIndex = this.getPrevIndex();
    this.startTestimonialAutoCycle(); // Reset timer
  }

  nextTestimonial() {
    this.activeTestimonialIndex = this.getNextIndex();
    this.startTestimonialAutoCycle(); // Reset timer
  }
}
