import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-started',
  imports: [CommonModule, RouterModule],
  templateUrl: './how-started.html',
  styleUrl: './how-started.scss',
})
export class HowStarted implements OnInit {
  sdgs = [
    { title: 'No Poverty', img: '/sdg/sdg-1.png' },
    { title: 'Zero Hunger', img: '/sdg/sdg-2.jpeg' },
    { title: 'Good Health', img: '/sdg/sdg-3.jpeg' },
    { title: 'Quality Education', img: '/sdg/sdg-4.jpeg' },
    { title: 'Clean Water', img: '/sdg/sdg-6.jpeg' },
    { title: 'Reduce Inequality', img: '/sdg/sdg-10.png' },
    { title: 'Life On Land', img: '/sdg/sdg-15.jpeg' },
    { title: 'Peace, Justice', img: '/sdg/sdg-16.png' },
    { title: 'Partnerships', img: '/sdg/sdg-17.png' }
  ];

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    const pageTitle = 'About Us - Pephands Foundation';
    const pageDesc = 'Learn about Pephands Foundation, our journey, and our commitment to the UN Sustainable Development Goals (SDGs).';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDesc });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: pageDesc });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: pageDesc });
  }
}
