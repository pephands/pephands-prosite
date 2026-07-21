import { SeoService } from '../../Providers/seo.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './legal.html',
  styleUrl: './legal.css'
})
export class LegalPage implements OnInit {
  constructor(private seoService: SeoService) {}
  lastUpdated: string = '13 July 2026';

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Legal',
      description: 'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
      image: '/logos/pephands-foundation.png',
      keywords: 'Pephands Foundation, ngo, charity, legal'
    });
  }

}