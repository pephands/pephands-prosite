import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Campaign, CauseCategory } from '../../Models/camapaigns';
import { CausesService } from '../../Providers/causes.service';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CampaignCard } from '../campaign-card/campaign-card';

@Component({
  selector: 'app-home-education',
  standalone: true,
  imports: [CommonModule, RouterModule, CampaignCard],
  templateUrl: './home-education.html',
  styleUrl: './home-education.css',
})
export class HomeEducation implements OnInit {
  @ViewChild('tabsContainer') tabsContainer!: ElementRef;
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  hasOverflow: boolean = false;
  hasCarouselOverflow: boolean = false;
  currentSlideIndex: number = 0;
  isAtStart: boolean = true;
  isAtEnd: boolean = false;
  isLoading: boolean = true;
  categories: CauseCategory[] = [];
  activeCategoryId: number = 0;
  cards: Campaign[] = [];

  constructor(private campaignService: CausesService) {}

  ngOnInit() {
    this.isLoading = true;
    this.fetchCampaignsByCategory(2);
  }

  onCarouselScroll() {
    // Basic handler for the scroll event on the slider track
    // Can be used to hide/show scroll arrows if needed
  }

  fetchCampaignsByCategory(categoryId: number) {
    this.isLoading = true;
    this.campaignService.getData({ category: categoryId }).subscribe({
      next: (res: any) => {
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
              categoryId:
                item.categories && item.categories.length > 0
                  ? typeof item.categories[0] === 'string'
                    ? 0
                    : item.categories[0].id
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

          // Sort cards by order
          this.cards.sort((a, b) => a.order - b.order);
        } else {
          this.cards = [];
        }

        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching campaigns:', err);
        this.isLoading = false;
      },
    });
  }
}
