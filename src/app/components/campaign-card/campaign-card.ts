import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Campaign } from '../../Models/camapaigns';

@Component({
  selector: 'app-campaign-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './campaign-card.html',
  styleUrl: './campaign-card.css',
})
export class CampaignCard {
  @Input() campaign!: Campaign;
}
