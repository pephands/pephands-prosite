import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-actions',
  imports: [CommonModule, RouterLink],
  templateUrl: './home-actions.html',
  styleUrl: './home-actions.scss',
})
export class HomeActions {
  isExpanded: boolean = false;
  currentImageIndex: number = 0;
  slideshowInterval: any;

  images: string[] = [
    '/flood/flood1.png',
    '/flood/flood2.png',
    '/flood/flood3.png',
    '/flood/flood4-1.png',
    '/flood/flood5.png',
    '/flood/flood6.png',
    '/flood/flood7-1.png',
    '/flood/flood8.png',
  ];

  ngOnInit() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    if (this.slideshowInterval) {
      clearInterval(this.slideshowInterval);
    }
  }

  startSlideshow() {
    this.slideshowInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 4000); // Change image every 4 seconds
  }

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }
}
