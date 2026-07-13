import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-refund',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './refund.html',
  styleUrl: './refund.css'
})
export class RefundPolicy {
  lastUpdated: string = '21 April 2024';
}
