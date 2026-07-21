import { SeoService } from '../../Providers/seo.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { FetchBlogsService } from '../../Providers/blogs.service';
import { Blog } from '../../Models/blog';
import { BlogCard } from '../../components/blog-card/blog-card';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule, BlogCard],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css'
})
export class Blogs implements OnInit {
  blogs: Blog[] = [];

  currentPage: number = 1;
  totalPages: number = 1;
  hasNextPage: boolean = false;
  hasPrevPage: boolean = false;
  isLoading: boolean = false;
  pageSize: number = 9;

  constructor(private seoService: SeoService, private blogService: FetchBlogsService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getBlogList();
    this.seoService.updateMetaTags({
      title: 'Blogs',
      description: 'Pephands Foundation is Initiative Driven top NGO in Chennai for food donation, community support and Social Welfare',
      image: '/logos/pephands-foundation.png',
      keywords: 'Pephands Foundation, ngo, charity, blogs'
    });
  }

  getBlogList(pageNumber: number = 1) {
    this.currentPage = pageNumber;
    this.isLoading = true;
    let params = {
      for_foundation: 'True',
      for_crowdfunding: 'True',
      page: this.currentPage
    };

    this.blogService.getData(params).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        let count = response.count || 0;
        this.totalPages = Math.max(1, Math.ceil(count / this.pageSize));
        this.hasNextPage = response.next != null;
        this.hasPrevPage = response.previous != null;

        let blogs: any = response.results;
        this.blogs = []; // clear the array for traditional pagination
        if (blogs && blogs.length) {
          blogs.forEach((post: any) => {
            this.blogs.push(new Blog().deserializer(post));
          });
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('API Error:', err);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  nextPage() {
    if (this.hasNextPage) {
      this.getBlogList(this.currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  prevPage() {
    if (this.hasPrevPage) {
      this.getBlogList(this.currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }


}