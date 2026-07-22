import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeCarefund } from '../../components/home-carefund/home-carefund';
import { SeoService } from '../../Providers/seo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pepcares',
  imports: [HomeCarefund, CommonModule, RouterModule],
  templateUrl: './pepcares.html',
  styleUrl: './pepcares.scss',
})
export class Pepcares implements OnInit {
  constructor(private seoService: SeoService) {}
  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Pepcares Chennai`s Leading  Free Pain And Palliative Care In Chennai',
      description:
        'Pepcares is Chennai`s Leading  Free Pain And Palliative Care In Chennai From Pephands Foundation for End of life children, cancer patients',
      image: '/logos/pephands-foundation.png',
      keywords:
        'Pan-India charity organization, Non-profit foundation in India, Welfare organization across India, Nationwide charity drive, Special day giving nationwide, Celebrate with charity across India, Donate for a cause nationwide, Charity events in India, Philanthropy nationwide, Impactful giving in India, Spread kindness nationwide, Volunteer opportunities across India, Community outreach pan-India, Empowerment through charity nationwide, Giving back to society in India, Social responsibility across India, Support charitable causes nationwide, Nationwide fundraising events, Make a difference nationwide, Charity initiatives pan-India',
    });
  }
}
