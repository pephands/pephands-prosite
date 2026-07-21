import { SeoService } from '../../Providers/seo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pephands-chronicles',
  imports: [],
  templateUrl: './pephands-chronicles.html',
  styleUrl: './pephands-chronicles.css',
})
export class PephandsChronicles implements OnInit {
  constructor(private seoService: SeoService) {}
  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Pephands Chronicles',
      description: 'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
      image: '/logos/pephands-foundation.png',
      keywords: 'Pephands Foundation, ngo, charity, pephands chronicles'
    });
  }

}