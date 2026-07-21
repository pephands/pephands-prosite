import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Endpoint } from '../../Http/endpoint';
import { MetaTagService } from '../../Providers/metaTag.service';

@Component({
  selector: 'app-marathongallery-2026',
  imports: [CommonModule, RouterModule],
  templateUrl: './marathongallery-2026.html',
  styleUrl: './marathongallery-2026.scss',
})
export class Marathongallery2026 implements OnInit {
  galleryImages: { src: string; alt: string }[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(
    private http: HttpClient,
    private endpoint: Endpoint,
    private metaTagService: MetaTagService,
  ) {}

  ngOnInit(): void {
    this.metaTagService.updateMetaTags({
      title: 'Run For Life Marathon - Gallery | Pephands Foundation',
      keywords:
        'Run For Life Marathon in Chennai 2026, Run for Life Marathon in Chennai, Best Marathon in Chennai, Best Social Cause Marathon in Chennai, Top Drug-Free Marathon in Chennai',
      ogTitle: 'Run For Life Marathon - Gallery | Pephands Foundation',
      twitterTitle: 'Run For Life Marathon - Gallery | Pephands Foundation',
      description:
        "Discover the Run For Life Marathon 2026 Gallery, featuring memorable event photos of runners, volunteers, and community participation at Pephands Foundation's anti-drug awareness marathon in Chennai.",
    });
    this.fetchGalleryImages();
  }

  fetchGalleryImages(url?: string) {
    const fetchUrl =
      url || this.endpoint.baseURL + 'sitedata/events/?url_desc=Run-for-Life-Marathon-2026';
    this.http.get<any>(fetchUrl).subscribe(
      (res) => {
        if (res && res.status && res.data && res.data.length > 0) {
          const eventData = res.data[0];
          if (
            eventData.image &&
            eventData.image.results &&
            Array.isArray(eventData.image.results)
          ) {
            this.galleryImages = eventData.image.results.map((imgUrl: string) => {
              return { src: imgUrl, alt: 'Marathon Gallery Image' };
            });

            const pageMatch = fetchUrl.match(/[?&]page=(\d+)/);
            this.currentPage = pageMatch ? parseInt(pageMatch[1], 10) : 1;

            const count = eventData.image.count || 0;
            this.totalPages = Math.ceil(count / 9);
          }
        }
      },
      (err) => {
        console.error('Error fetching gallery images', err);
      },
    );
  }

  changePage(page: number | string) {
    if (
      typeof page === 'number' &&
      page >= 1 &&
      page <= this.totalPages &&
      page !== this.currentPage
    ) {
      const targetUrl =
        this.endpoint.baseURL + `sitedata/events/?page=${page}&url_desc=Run-for-Life-Marathon-2026`;
      this.fetchGalleryImages(targetUrl);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getPageArray(): (number | string)[] {
    const pages: (number | string)[] = [];
    if (this.totalPages <= 7) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', this.totalPages);
      } else if (this.currentPage >= this.totalPages - 3) {
        pages.push(
          1,
          '...',
          this.totalPages - 4,
          this.totalPages - 3,
          this.totalPages - 2,
          this.totalPages - 1,
          this.totalPages,
        );
      } else {
        pages.push(
          1,
          '...',
          this.currentPage - 1,
          this.currentPage,
          this.currentPage + 1,
          '...',
          this.totalPages,
        );
      }
    }
    return pages;
  }

  selectedImage: string | null = null;

  openViewer(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeViewer() {
    this.selectedImage = null;
  }

  downloadingStates: { [key: number]: boolean } = {};

  downloadImage(imageUrl: string, fileName: string, index: number) {
    this.downloadingStates[index] = true;
    // Bypass Google Cloud Storage CORS restrictions using a public image proxy
    const proxyUrl = 'https://images.weserv.nl/?url=' + encodeURIComponent(imageUrl);

    fetch(proxyUrl)
      .then((response) => {
        if (!response.ok) {
          // Fallback to original URL if proxy fails (will likely hit CORS error)
          return fetch(imageUrl).then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res;
          });
        }
        return response;
      })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.error('Error downloading image: ', err);
        // Final Fallback if both fail
        alert(
          "The image cannot be downloaded directly. It will open in a new tab where you can right-click and select 'Save Image As...'.",
        );
        window.open(imageUrl, '_blank');
      })
      .finally(() => {
        this.downloadingStates[index] = false;
      });
  }
}
