import { SeoService } from '../../Providers/seo.service';
import { Component, OnInit } from '@angular/core';
import { BfBanner } from '../../components/bf-banner/bf-banner';
import { BfMotto } from '../../components/bf-motto/bf-motto';
import { BfWeek } from '../../components/bf-week/bf-week';
import { BfWorks } from '../../components/bf-works/bf-works';
import { BfCollection } from '../../components/bf-collection/bf-collection';
import { BfDistribution } from '../../components/bf-distribution/bf-distribution';
import { BfOverview } from '../../components/bf-overview/bf-overview';
import { BfGoals } from '../../components/bf-goals/bf-goals';
import { BfInitiative } from '../../components/bf-initiative/bf-initiative';
import { BfBenefits } from '../../components/bf-benefits/bf-benefits';

@Component({
  selector: 'app-super-mom',
  imports: [
    BfBanner,
    BfMotto,
    BfWeek,
    BfWorks,
    BfCollection,
    BfDistribution,
    BfOverview,
    BfGoals,
    BfInitiative,
    BfBenefits
  ],
  templateUrl: './super-mom.html',
  styleUrl: './super-mom.css',
})
export class SuperMom implements OnInit {
  constructor(private seoService: SeoService) {}
  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Super Mom',
      description: 'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
      image: '/logos/pephands-foundation.png',
      keywords: 'Pephands Foundation, ngo, charity, super mom'
    });
  }

}