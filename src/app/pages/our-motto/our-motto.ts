import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-motto',
  imports: [CommonModule],
  templateUrl: './our-motto.html',
  styleUrl: './our-motto.scss',
})
export class OurMotto implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    const pageTitle = 'Our Motto - Pephands Foundation';
    const pageDesc = 'Discover the Mission, Vision, and Values of Pephands Foundation. Learn how we are building a more equitable world.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDesc });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: pageDesc });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: pageDesc });
    this.meta.updateTag({ property: 'og:image', content: 'https://pephands-prosite.web.app/logos/pephands-foundation.png' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://pephands-prosite.web.app/logos/pephands-foundation.png' });
  }
}
