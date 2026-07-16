import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { FoundationEvent } from '../../Models/event';

@Component({
  selector: 'app-recent-card',
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './recent-card.html',
  styleUrl: './recent-card.css',
})
export class RecentCard {
  @Input()
  recentEvent!: FoundationEvent;

  @Input()
  index: number = 0; // Stagger index passed from parent loop

  currentImageIndex = 0;
  previousImageIndex = -1; // -1 means no previous image initially
  private intervalId: any;
  private timeoutId: any;

  ngOnInit() {
    this.startAutoSwipe();
  }

  ngOnDestroy() {
    this.stopAutoSwipe();
  }

  startAutoSwipe() {
    // If the event has multiple images, cycle through them automatically
    if (this.recentEvent?.recent_images?.length > 1) {
      // Modulo 3 cycles the stagger index (0, 1, 2) across all rows so they behave identically.
      // Every card shows its first image IMMEDIATELY on load, and only staggers the swipe to the next image!
      const staggerIndex = (this.index || 0) % 3;
      const staggerDelay = staggerIndex * 2000; // 2 seconds staggered delay between each column

      this.timeoutId = setTimeout(() => {
        this.intervalId = setInterval(() => {
          this.previousImageIndex = this.currentImageIndex;
          this.currentImageIndex =
            (this.currentImageIndex + 1) % this.recentEvent.recent_images.length;
        }, 5000); // 6 seconds cycle keeps the domino effect running continuously and beautifully!
      }, staggerDelay);
    }
  }

  stopAutoSwipe() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
