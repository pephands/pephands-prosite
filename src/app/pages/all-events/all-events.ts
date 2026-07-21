import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { FoundationEvent } from '../../Models/event';
import { MetaTagService } from '../../Providers/metaTag.service';
import { FetchRecentEventsService } from '../../Providers/recentEvents.service';
import { SeoService } from '../../Providers/seo.service';
import { FetchUpcomingEventsService } from '../../Providers/upcomingEvents.service';
import { BasePageComponent } from '../base';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { RecentCard } from '../../components/recent-card/recent-card';

@Component({
  selector: 'app-all-events',
  imports: [CommonModule, RouterModule, MaterialModule, RecentCard],
  templateUrl: './all-events.html',
  styleUrl: './all-events.scss',
})
export class AllEvents extends BasePageComponent {
  isLoading1: boolean = true;
  isLoading2: boolean = true;

  recentEvents!: FoundationEvent[];
  upcomingEvents: FoundationEvent[] = [];
  activeTab: number = 1;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    public recentEventsService: FetchRecentEventsService,
    public upcomingEventsService: FetchUpcomingEventsService,
    public seoService: SeoService,
    private metaTagService: MetaTagService,
    public dial: MatDialog,
    public snack: MatSnackBar,
    private route: ActivatedRoute,
  ) {
    super(dial, snack, platformId);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    this.fetchRecentEvents();
    this.fetchUpcomingEvents();
    this.updateMetaTags();
    this.setCanonicalUrl();

    this.route.queryParams.subscribe((params) => {
      if (params['tab'] === 'upcoming') {
        this.activeTab = 2;
      } else {
        this.activeTab = 1;
      }
    });
  }
  fetchUpcomingEvents() {
    this.presentLoader;
    this.upcomingEventsService.getData().subscribe((response) => {
      let upcoming = response as any[];
      this.upcomingEvents = [];
      if (upcoming && upcoming.length) {
        upcoming.forEach((res) => {
          this.upcomingEvents.push(new FoundationEvent().deserialize(res));
        });
        this.dismissLoader();
      }
    });
  }

  fetchRecentEvents() {
    this.presentLoader();
    this.recentEventsService.getData().subscribe((response) => {
      let recents = response as any[];
      this.recentEvents = [];
      if (recents && recents.length) {
        recents.reverse().forEach((recent) => {
          this.recentEvents.unshift(new FoundationEvent().deserialize(recent));
        });
        this.dismissLoader();
      }
    });
  }
  updateMetaTags() {
    this.metaTagService.updateMetaTags({
      title: 'Recent Events - Pephands Foundation',
      keywords:
        'Pan-India charity organization, Non-profit foundation in India, Welfare organization across India, Nationwide charity drive, Special day giving nationwide, Celebrate with charity across India, Donate for a cause nationwide, Charity events in India, Philanthropy nationwide, Impactful giving in India, Spread kindness nationwide, Volunteer opportunities across India, Community outreach pan-India, Empowerment through charity nationwide, Giving back to society in India, Social responsibility across India, Support charitable causes nationwide, Nationwide fundraising events, Make a difference nationwide, Charity initiatives pan-India',
      ogTitle: 'Recent Events - Pephands Foundation',
      twitterTitle: 'Recent Events - Pephands Foundation',
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
