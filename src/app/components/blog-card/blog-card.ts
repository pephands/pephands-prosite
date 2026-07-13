import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Blog } from '../../Models/blog';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css'
})
export class BlogCard {
  @Input() blog!: Blog;
}
