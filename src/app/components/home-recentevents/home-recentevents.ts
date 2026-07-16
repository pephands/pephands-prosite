import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FoundationEvent } from '../../Models/event';
import { FetchRecentEventsService } from '../../Providers/recentEvents.service';
import { RecentCard } from '../recent-card/recent-card';

@Component({
  selector: 'app-home-recentevents',
  imports: [CommonModule, RecentCard],
  templateUrl: './home-recentevents.html',
  styleUrl: './home-recentevents.css',
})
export class HomeRecentevents implements OnInit, OnDestroy {
  isLoading: boolean = true;
  recentEvents: FoundationEvent[] = [];
  autoScrollInterval: any;
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;

  constructor(
    public recentEventsService: FetchRecentEventsService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.fetchRecentEvents();
  }

  ngOnDestroy(): void {
    this.pauseAutoScroll();
  }

  pauseAutoScroll(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }

  startAutoScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.pauseAutoScroll();
      this.autoScrollInterval = setInterval(() => {
        this.scrollSlider(1);
      }, 3000);
    }
  }

  fetchRecentEvents() {
    this.recentEventsService.getData().subscribe((response) => {
      let recents = response as any[];
      this.recentEvents = [];
      if (recents && recents.length) {
        recents.forEach((recent) => {
          this.recentEvents.push(new FoundationEvent().deserialize(recent));
        });
        this.isLoading = false;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.startAutoScroll();
        }, 100);
      }
    });
  }

  scrollSlider(direction: number) {
    if (this.sliderTrack) {
      const track = this.sliderTrack.nativeElement;
      const slideCount = window.innerWidth < 768 ? 1 : (window.innerWidth < 992 ? 2 : 3);
      const scrollAmount = track.clientWidth / slideCount;
      
      if (direction === 1 && Math.ceil(track.scrollLeft + track.clientWidth) >= track.scrollWidth) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (direction === -1 && track.scrollLeft === 0) {
        track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
      }
    }
  }
}
