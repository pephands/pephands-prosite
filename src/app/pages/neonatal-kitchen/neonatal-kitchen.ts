import { SeoService } from '../../Providers/seo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neonatal-kitchen',
  imports: [],
  templateUrl: './neonatal-kitchen.html',
  styleUrl: './neonatal-kitchen.css',
})
export class NeonatalKitchen implements OnInit {
  constructor(private seoService: SeoService) {}
  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Neonatal Kitchen',
      description: 'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
      image: '/logos/pephands-foundation.png',
      keywords: 'Pephands Foundation, ngo, charity, neonatal kitchen'
    });
  }

}