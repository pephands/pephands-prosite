import { Injectable, Inject, RendererFactory2, Renderer2, PLATFORM_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  createLinkForCanonicalURL(canonicalUrl?: string): void {
    const head = this.doc.head;
    if (!head) return;

    // Use provided URL or fallback to current page URL (cleaning up query params/hashes)
    let href = canonicalUrl;
    if (!href) {
      if (isPlatformBrowser(this.platformId)) {
        try {
          href = this.doc.location.href.split('?')[0].split('#')[0];
        } catch (e) {
          href = 'https://pephands.org/';
        }
      } else {
        // On server side, if no URL provided, log warning
        console.warn('[SEO] No canonical URL provided and not on browser');
        href = 'https://pephands.org/';
      }
    }

    // Try to find the existing tag by ID first (added in index.html)
    const existingById = this.doc.getElementById('canonical-tag');
    if (existingById) {
      this.renderer.setAttribute(existingById, 'href', href!);
      return;
    }

    // Fallback: Remove any existing canonical links without ID to avoid duplicates
    const existing = this.doc.querySelectorAll("link[rel='canonical']");
    existing.forEach((el) => {
      this.renderer.removeChild(head, el);
    });

    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'id', 'canonical-tag');
    this.renderer.setAttribute(link, 'rel', 'canonical');
    this.renderer.setAttribute(link, 'href', href!);
    this.renderer.appendChild(head, link);
  }
}
