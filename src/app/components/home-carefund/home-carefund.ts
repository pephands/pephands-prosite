import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-carefund',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-carefund.html',
  styleUrl: './home-carefund.css',
})
export class HomeCarefund {}
