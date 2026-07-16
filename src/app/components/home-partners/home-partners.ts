import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-partners',
  imports: [CommonModule],
  templateUrl: './home-partners.html',
  styleUrl: './home-partners.css',
})
export class HomePartners {
  images = [
    '/partners/kh.png',
    '/partners/decathlon.png',
    '/partners/mgm-dw.png',
    '/partners/synergy.png',
    '/partners/vtm.png',
    '/partners/ak.png',
    '/partners/kk.png',
    '/partners/apollo.png',
    '/partners/phov.png',
    '/partners/mgm.png',
    '/partners/ph.png',
    '/partners/srm.png',
    '/partners/vs.png',
    '/partners/ich.png',
  ];
}
