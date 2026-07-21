import { SeoService } from '../../Providers/seo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ich-center',
  imports: [],
  templateUrl: './ich-center.html',
  styleUrl: './ich-center.css',
})
export class IchCenter implements OnInit {
  constructor(private seoService: SeoService) {}
  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Ich Center',
      description: 'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
      image: '/logos/pephands-foundation.png',
      keywords: 'Pephands Foundation, ngo, charity, ich center'
    });
  }

}