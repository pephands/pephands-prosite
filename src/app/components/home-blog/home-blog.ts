import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { FetchBlogsService } from '../../Providers/blogs.service';
import { Blog } from '../../Models/blog';
import { BlogCard } from '../blog-card/blog-card';

@Component({
  selector: 'app-home-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule, BlogCard],
  templateUrl: './home-blog.html',
  styleUrl: './home-blog.css'
})
export class HomeBlog implements OnInit, OnDestroy {
  blogs: Blog[] = [];
  autoScrollInterval: any;
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private blogService: FetchBlogsService, 
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getBlogList();
  }

  ngOnDestroy(): void {
    this.pauseAutoScroll();
  }

  pauseAutoScroll(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }

  startAutoScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.pauseAutoScroll();
      this.autoScrollInterval = setInterval(() => {
        this.scrollSlider(1);
      }, 3000);
    }
  }

  getBlogList() {
    let params = {
      for_foundation: 'True',
      for_crowdfunding: 'True',
      page: 1
    };

    this.blogService.getData(params).subscribe({
      next: (response: any) => {
        let blogs: any = response.results;
        this.blogs = [];
        if (blogs && blogs.length) {
          blogs.forEach((post: any) => {
            this.blogs.push(new Blog().deserializer(post));
          });
        }
        this.cdr.detectChanges();
        setTimeout(() => {
          this.startAutoScroll();
        }, 100);
      },
      error: (err) => {
        console.error('API Error:', err);
        this.cdr.detectChanges();
      }
    });

  }

  scrollSlider(direction: number) {
    if (this.sliderTrack) {
      const track = this.sliderTrack.nativeElement;
      // Determine how much to scroll: 1 slide at a time
      // The track's clientWidth divided by the number of visible slides
      const slideCount = window.innerWidth < 768 ? 1 : (window.innerWidth < 992 ? 2 : 3);
      const scrollAmount = track.clientWidth / slideCount;
      
      if (direction === 1 && Math.ceil(track.scrollLeft + track.clientWidth) >= track.scrollWidth) {
        // At the end, jump back to start smoothly
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (direction === -1 && track.scrollLeft === 0) {
        // At the beginning, jump to end smoothly
        track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
      }
    }
  }
}
