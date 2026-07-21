import { SeoService } from '../../Providers/seo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-milk',
  imports: [],
  templateUrl: './donate-milk.html',
  styleUrl: './donate-milk.css',
})
export class DonateMilk implements OnInit {
  constructor(private seoService: SeoService) {}
  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Donate Milk',
      description: 'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
      image: '/logos/pephands-foundation.png',
      keywords: 'Pephands Foundation, ngo, charity, donate milk'
    });
  }

}