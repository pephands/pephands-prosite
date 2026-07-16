import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-sdg',
  imports: [CommonModule],
  templateUrl: './home-sdg.html',
  styleUrl: './home-sdg.css',
})
export class HomeSdg {

  sdgGoals = [
    { id: 1, src: '/sdg/sdg-1.png', alt: 'No Poverty' },
    { id: 2, src: '/sdg/sdg-2.jpeg', alt: 'Zero Hunger' },
    { id: 3, src: '/sdg/sdg-3.jpeg', alt: 'Good Health and Well-being' },
    { id: 4, src: '/sdg/sdg-4.jpeg', alt: 'Quality Education' },
    { id: 6, src: '/sdg/sdg-6.jpeg', alt: 'Clean Water and Sanitation' },
    { id: 10, src: '/sdg/sdg-10.png', alt: 'Reduced Inequalities' },
    { id: 15, src: '/sdg/sdg-15.jpeg', alt: 'Life on Land' },
    { id: 16, src: '/sdg/sdg-16.png', alt: 'Peace, Justice and Strong Institutions' },
    { id: 17, src: '/sdg/sdg-17.png', alt: 'Partnerships for the Goals' }
  ];
}
