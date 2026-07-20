import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignCard } from '../../components/campaign-card/campaign-card';
import { Campaign } from '../../Models/camapaigns';
import { CausesService } from '../../Providers/causes.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-medical-campaigns',
  standalone: true,
  imports: [CommonModule, CampaignCard, RouterModule],
  templateUrl: './medical-campaigns.html',
  styleUrl: './medical-campaigns.css',
})
export class MedicalCampaigns implements OnInit {
  isLoading: boolean = true;
  cards: Campaign[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 0;
  limit: number = 9;

  constructor(private campaignService: CausesService) {}

  ngOnInit() {
    this.fetchCampaigns(this.currentPage);
  }

  fetchCampaigns(page: number) {
    this.isLoading = true;
    this.campaignService.getData({ category: 1, page: page, limit: this.limit }).subscribe({
      next: (res: any) => {
        if (res.count !== undefined) {
          this.totalItems = res.count;
          this.totalPages = Math.ceil(this.totalItems / this.limit);
        }

        let data: any = null;
        if (res.results) {
          data = Array.isArray(res.results) ? res.results : res.results.data;
        } else if (res.data) {
          data = res.data;
        } else if (Array.isArray(res)) {
          data = res;
        }

        if (data) {
          data = data.filter((item: any) => {
            const status = item.status ? item.status.toUpperCase() : '';
            return status !== 'DRAFT' && status !== 'CANCELLED';
          });

          this.cards = data.map((item: any) => {
            const date1 = new Date();
            const date2 = new Date(item.deadline);
            let diffInDays = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
            diffInDays = diffInDays < 0 ? 0 : diffInDays;

            return {
              id: item.id,
              categoryId: item.categories && item.categories.length > 0
                  ? (typeof item.categories[0] === 'string' ? 0 : item.categories[0].id)
                  : 0,
              categoryIds: item.categories
                ? item.categories.map((c: any) => (typeof c === 'string' ? 0 : c.id))
                : [],
              image: item.thumbnail,
              title: item.title,
              slug: item.slug,
              description: item.description,
              story: item.story,
              amountCollected: parseFloat(item.raised_amount) || 0,
              goalAmount: parseFloat(item.goal_amount) || 0,
              remainingDays: Math.round(diffInDays),
              donationCount: item.donor_count || 0,
              percentageRaised: parseFloat(item.percentage_raised) || 0,
              status: item.status,
              isTaxBenefited: true,
              isEmergency: false,
              order: item.order !== undefined ? item.order : 999,
            };
          });

          this.cards.sort((a, b) => a.order - b.order);
        } else {
          this.cards = [];
        }

        this.isLoading = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: (err) => {
        console.error('Error fetching campaigns:', err);
        this.isLoading = false;
      },
    });
  }

  changePage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.fetchCampaigns(this.currentPage);
    }
  }
}
