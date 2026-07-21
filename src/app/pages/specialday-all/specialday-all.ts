import { SeoService } from '../../Providers/seo.service';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SpecialCampaigns } from '../../Models/specialCampaigns';
import { FetchSpecialCampaignsListService } from '../../Providers/special-campaigns-list.service';
import { SpecialdayCard } from '../../components/specialday-card/specialday-card';

@Component({
  selector: 'app-specialday-all',
  imports: [CommonModule, SpecialdayCard],
  templateUrl: './specialday-all.html',
  styleUrl: './specialday-all.css',
})
export class SpecialdayAll implements OnInit {
  isLoading: boolean = true;
  specialCampaigns: SpecialCampaigns[] = [];

  constructor(private seoService: SeoService, 
    @Inject(PLATFORM_ID) private platformId: Object,
    public campaignsListService: FetchSpecialCampaignsListService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Specialday All',
      description: 'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
      image: '/logos/pephands-foundation.png',
      keywords: 'Pephands Foundation, ngo, charity, specialday all'
    });

    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    this.getSpecialCampaignList();
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
        }, 100);
      },
      error: (err) => {
        console.error('Failed to fetch special campaigns:', err);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
