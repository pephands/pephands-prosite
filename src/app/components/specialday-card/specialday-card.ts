import { Component, Input } from '@angular/core';
import { SpecialCampaigns } from '../../Models/specialCampaigns';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-specialday-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './specialday-card.html',
  styleUrl: './specialday-card.css',
})
export class SpecialdayCard {
  @Input() campaign!: SpecialCampaigns;
}
