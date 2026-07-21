import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bf-banner',
  imports: [MatIconModule, RouterLink],
  templateUrl: './bf-banner.html',
  styleUrl: './bf-banner.scss',
})
export class BfBanner {}
