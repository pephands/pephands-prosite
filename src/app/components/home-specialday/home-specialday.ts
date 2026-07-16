import { Component, PLATFORM_ID, Inject, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SpecialCampaigns } from '../../Models/specialCampaigns';
import { FetchSpecialCampaignsListService } from '../../Providers/special-campaigns-list.service';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { SpecialdayCard } from '../specialday-card/specialday-card';

@Component({
  selector: 'app-home-specialday',
  imports: [CommonModule, SpecialdayCard],
  templateUrl: './home-specialday.html',
  styleUrl: './home-specialday.css',
})
export class HomeSpecialday implements OnDestroy {
  isLoading: boolean = true;
  specialCampaigns: SpecialCampaigns[] = [];
  shakeCardIndex: number | null = null;
  autoScrollInterval: any;
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public campaignsListService: FetchSpecialCampaignsListService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    this.getSpecialCampaignList();
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

  getSpecialCampaignList() {
    this.campaignsListService.getData().subscribe({
      next: (response: any) => {
        let campaigns: any = response;
        this.specialCampaigns = [];
        if (campaigns && campaigns.length) {
          campaigns.forEach((campaign: any) => {
            this.specialCampaigns.push(new SpecialCampaigns().deserializer(campaign));
          });
        }
        setTimeout(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
          this.startAutoScroll();
        }, 100);
      },
      error: (err) => {
        console.error('Failed to fetch special campaigns:', err);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  scrollSlider(direction: number) {
    if (this.sliderTrack) {
      const track = this.sliderTrack.nativeElement;
      const slideCount = window.innerWidth < 768 ? 1 : (window.innerWidth < 992 ? 2 : 4);
      const scrollAmount = track.clientWidth / slideCount;
      
      // Infinite scroll illusion
      if (direction === 1 && Math.ceil(track.scrollLeft + track.clientWidth) >= track.scrollWidth) {
        // At the end, jump back to start smoothly
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (direction === -1 && track.scrollLeft === 0) {
        // At the beginning, jump to end smoothly
        track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
      }
    }
  }
}
