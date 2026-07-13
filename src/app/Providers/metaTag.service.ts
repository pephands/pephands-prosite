import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaTagService {
  currentURL!: string;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,

    private title: Title,
    private meta: Meta
  ) { }

  updateMetaTags({
    title = '',
    description = '',
    keywords = '',
    ogTitle = '',
    ogDescription = '',
    ogUrl = '',
    ogImage = '',
    ogImageWidth = '',
    ogImageHeight = '',
    twitterTitle = '',
    twitterImage = '',
    twitterDescription = '',
    twitterUrl = '',
  }: {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogUrl?: string;
    ogImage?: string;
    ogImageWidth?: string;
    ogImageHeight?: string;
    twitterTitle?: string;
    twitterImage?: string;
    twitterDescription?: string;
    twitterUrl?: string;
  }) {
    if (isPlatformBrowser(this.platformId)) {
      this.currentURL = window.location.href;
    }

    if (title) {
      this.title.setTitle(title);
    }

    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }

    if (keywords) {
      this.meta.updateTag({ name: 'keywords', content: keywords });
    }

    const finalUrl = ogUrl || this.currentURL;

    if (ogTitle) {
      this.meta.updateTag({ property: 'og:title', content: ogTitle });
    }

    if (finalUrl) {
      this.meta.updateTag({ property: 'og:url', content: finalUrl });
    }

    if (ogDescription) {
      this.meta.updateTag({
        property: 'og:description',
        content: ogDescription,
      });
    }

    if (ogImage) {
      // Ensure absolute URL for images
      const absoluteImage = ogImage.startsWith('http') ? ogImage : `https://pephands.org/${ogImage.startsWith('/') ? ogImage.substring(1) : ogImage}`;
      this.meta.updateTag({ property: 'og:image', content: absoluteImage });
    }
    if (ogImageHeight) {
      this.meta.updateTag({ property: 'og:image:height', content: ogImageHeight });
    }
    if (ogImageWidth) {
      this.meta.updateTag({ property: 'og:image:width', content: ogImageWidth });
    }

    if (twitterTitle) {
      this.meta.updateTag({ name: 'twitter:title', content: twitterTitle });
    }

    if (twitterDescription) {
      this.meta.updateTag({
        name: 'twitter:description',
        content: twitterDescription,
      });
    }

    if (twitterImage) {
      const absoluteTwitterImage = twitterImage.startsWith('http') ? twitterImage : `https://pephands.org/${twitterImage.startsWith('/') ? twitterImage.substring(1) : twitterImage}`;
      this.meta.updateTag({ name: 'twitter:image', content: absoluteTwitterImage });
    }

    if (twitterUrl || finalUrl) {
      this.meta.updateTag({ name: 'twitter:url', content: twitterUrl || finalUrl });
    }
  }
}
