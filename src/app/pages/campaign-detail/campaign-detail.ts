import { SeoService } from '../../Providers/seo.service';
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CausesService } from '../../Providers/causes.service';
import { CausesCategoryService } from '../../Providers/causes-category.service';
import { MetaTagService } from '../../Providers/metaTag.service';
import { catchError } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { CampaignUpdate } from '../../Models/campaignUpdate';
import { RecentSupport } from '../../Models/recentSupport';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-campaign-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, SlickCarouselModule],
  templateUrl: './campaign-detail.html',
  styleUrl: './campaign-detail.scss',
  schemas: [NO_ERRORS_SCHEMA],
})
export class CampaignDetail implements OnInit {
  activeTab: 'story' | 'report' | 'costs' = 'story';
  raisedAmount: number = 0;
  goalAmount: number = 0;
  donorsCount: number = 0;
  campaign: any = null;
  isLoading: boolean = true;
  isMobileDonationModalOpen: boolean = false;
  isMobileShareModalOpen: boolean = false;
  selectedDocument: string | null = null;

  storyImages: string[] = [];
  documentImages: string[] = [];

  storySlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    cssEase: 'ease-in-out',
    speed: 800,
  };

  documentSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: false,
    arrows: false,
    cssEase: 'ease-in-out',
    speed: 500,
  };

  campaignUpdates: CampaignUpdate[] = [];

  recentSupports: RecentSupport[] = [];

  get remainingDays(): number {
    if (!this.campaign || !this.campaign.deadline) return 0;
    const date1 = new Date();
    const date2 = new Date(this.campaign.deadline);
    let diffInDays = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
    return diffInDays < 0 ? 0 : Math.round(diffInDays);
  }

  get progressPercentage(): number {
    if (
      this.campaign &&
      this.campaign.percentage_raised !== undefined &&
      this.campaign.percentage_raised !== null
    ) {
      const pr = parseFloat(this.campaign.percentage_raised);
      if (!isNaN(pr) && pr > 0) {
        return pr > 100 ? 100 : pr;
      }
    }
    if (!this.goalAmount || this.goalAmount <= 0) return 0;
    let percentage = (this.raisedAmount / this.goalAmount) * 100;
    return percentage > 100 ? 100 : Math.round(percentage);
  }

  constructor(
    private seoService: SeoService,
    private route: ActivatedRoute,
    private campaignService: CausesService,
    private categoryService: CausesCategoryService,
    private metaTagService: MetaTagService,
  ) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Campaign Detail',
      description:
        'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
      image: '/logos/pephands-foundation.png',
      keywords: 'Pephands Foundation, ngo, charity, campaign detail',
    });
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        this.fetchCampaignDetails(slug);
      } else {
        this.isLoading = false;
      }
    });
  }

  fetchCampaignDetails(slug: string) {
    this.categoryService.getData().subscribe({
      next: (catRes: any) => {
        let categories: any[] = [];
        if (catRes.status && catRes.data) {
          categories = catRes.data;
        }

        if (categories.length === 0) {
          this.isLoading = false;
          return;
        }

        const requests = categories.map((cat) =>
          this.campaignService
            .getData({ category: cat.id, slug })
            .pipe(catchError((err) => of(null))),
        );

        forkJoin(requests).subscribe((responses: any[]) => {
          let foundCampaign = null;

          for (let res of responses) {
            if (!res) continue;

            let data: any = null;
            if (res.results) {
              data = Array.isArray(res.results) ? res.results : res.results.data;
            } else if (res.data) {
              data = res.data;
            } else if (res.id && res.slug) {
              data = res;
            } else if (Array.isArray(res)) {
              data = res;
            }

            if (data) {
              let campaign = Array.isArray(data) ? data.find((c: any) => c.slug === slug) : data;
              if (!campaign && Array.isArray(data)) {
                campaign = data.find((c: any) => c.slug === slug);
              }

              if (campaign) {
                foundCampaign = campaign;
                break;
              }
            }
          }

          if (foundCampaign) {
            this.campaign = foundCampaign;
            this.raisedAmount = parseFloat(foundCampaign.raised_amount) || 0;
            this.goalAmount = parseFloat(foundCampaign.goal_amount) || 0;
            this.donorsCount = foundCampaign.donor_count || 0;

            if (foundCampaign.campaign_images && foundCampaign.campaign_images.length > 0) {
              this.storyImages = foundCampaign.campaign_images;
            } else if (foundCampaign.thumbnail) {
              this.storyImages = [foundCampaign.thumbnail];
            } else {
              this.storyImages = [];
            }

            if (foundCampaign.documents && foundCampaign.documents.length > 0) {
              this.documentImages = foundCampaign.documents;
            } else {
              this.documentImages = [];
            }

            const canonicalUrl = `https://pephands.org/causes/${slug}`;
            const finalDesc =
              foundCampaign.description ||
              foundCampaign.short_description ||
              foundCampaign.story?.replace(/<[^>]*>/g, '').substring(0, 160) ||
              'Support this cause and make a difference with Pephands Foundation.';

            this.metaTagService.updateMetaTags({
              title: `${foundCampaign.title} - Pephands Foundation`,
              description: finalDesc,
              ogTitle: `${foundCampaign.title} - Pephands Foundation`,
              twitterTitle: `${foundCampaign.title} - Pephands Foundation`,
              ogDescription: finalDesc,
              twitterDescription: finalDesc,
              ogImage:
                foundCampaign.thumbnail ||
                foundCampaign.display_image ||
                'https://pephands.org/assets/logos/pephands-foundation.png',
              twitterImage:
                foundCampaign.thumbnail ||
                foundCampaign.display_image ||
                'https://pephands.org/assets/logos/pephands-foundation.png',
              ogUrl: canonicalUrl,
              twitterUrl: canonicalUrl,
              ogImageWidth: '1920px',
              ogImageHeight: '1080px',
            });

            this.fetchRecentDonations(this.campaign.id);
            this.fetchCampaignUpdates(this.campaign.id);
          }
          this.isLoading = false;
        });
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
        this.isLoading = false;
      },
    });
  }

  fetchRecentDonations(campaignId: string) {
    this.campaignService.getRecentDonations(campaignId).subscribe({
      next: (res: any) => {
        if (res && res.status && res.data && Array.isArray(res.data)) {
          this.recentSupports = res.data.map((item: any) => new RecentSupport().deserialize(item));
        }
      },
      error: (err) => console.error('Error fetching recent donations:', err),
    });
  }

  fetchCampaignUpdates(campaignId: string) {
    this.campaignService.getCampaignUpdates(campaignId).subscribe({
      next: (res: any) => {
        if (res && res.status && res.data && Array.isArray(res.data)) {
          this.campaignUpdates = res.data.map((item: any) =>
            new CampaignUpdate().deserialize(item),
          );
        }
      },
      error: (err) => console.error('Error fetching campaign updates:', err),
    });
  }

  selectTab(tab: 'story' | 'report' | 'costs'): void {
    this.activeTab = tab;
  }

  toggleMobileDonationModal(): void {
    this.isMobileDonationModalOpen = !this.isMobileDonationModalOpen;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = this.isMobileDonationModalOpen ? 'hidden' : '';
    }
  }

  toggleMobileShareModal(): void {
    this.isMobileShareModalOpen = !this.isMobileShareModalOpen;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = this.isMobileShareModalOpen ? 'hidden' : '';
    }
  }

  openDocument(imgUrl: string) {
    this.selectedDocument = imgUrl;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeDocument() {
    this.selectedDocument = null;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
