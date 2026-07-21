import { SeoService } from '../../Providers/seo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-givein-kind',
  imports: [],
  templateUrl: './givein-kind.html',
  styleUrl: './givein-kind.css',
})
export class GiveinKind implements OnInit {
  constructor(private seoService: SeoService) {}
  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Givein Kind',
      description: 'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
      image: '/logos/pephands-foundation.png',
      keywords: 'Pephands Foundation, ngo, charity, givein kind'
    });
  }

}