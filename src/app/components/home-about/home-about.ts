import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-about.html',
  styleUrl: './home-about.css'
})
export class HomeAboutComponent {

}
