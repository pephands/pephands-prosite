import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { ImpactCountsService } from '../../Providers/impactCounts.service';

@Component({
  selector: 'app-home-counts',
  imports: [CommonModule],
  templateUrl: './home-counts.html',
  styleUrl: './home-counts.scss',
})
export class HomeCounts {
  counts: any[] = []; 
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object,
    private impactCountsService: ImpactCountsService
  ) {}

  ngOnInit() {
    this.fetchCounts();
  }

  fetchCounts() {
    this.impactCountsService.getData().subscribe({
      next: (data) => {
        this.counts = Array.isArray(data) ? data : [];
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error fetching data';
        console.error(error);
        this.isLoading = false;
      },
    });
  }
}
