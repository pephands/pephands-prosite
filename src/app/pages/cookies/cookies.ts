import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cookies.html',
  styleUrl: './cookies.css'
})
export class CookiesPolicy {
  lastUpdated: string = '13 July 2026';
}
