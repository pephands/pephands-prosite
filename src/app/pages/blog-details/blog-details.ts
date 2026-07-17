import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FetchBlogsService, BlogsEditService } from '../../Providers/blogs.service';
import { Blog } from '../../Models/blog';
import { SeoService } from '../../Providers/seo.service';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css'
})
export class BlogDetails implements OnInit {
  blogUrl!: string;
  blog!: Blog;
  currentURL!: string;
  safeContent: SafeHtml | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public blogDetailService: FetchBlogsService,
    public blogsService: FetchBlogsService,
    public blogEditService: BlogsEditService,
    private titleService: Title,
    private metaService: Meta,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      const blogUrl = routeParams['blogUrl'];

      let params = {
        url_desc: blogUrl
      };

      this.blogDetailService.getData(params).subscribe((response: any) => {
        if (response.length !== 1) {
          this.router.navigate(['404NotFound'])
          return
        }
        this.blog = new Blog().deserializer(response[0]);

        if (this.blog) {
          this.safeContent = this.sanitizer.bypassSecurityTrustHtml(this.blog.story || '');
          this.updateSEO(this.blog);
          if (this.blog.source) {
            if (typeof localStorage !== 'undefined') {
              localStorage.setItem('spl_source', this.blog.source)
            }
          }
          this.cdr.detectChanges();
        }
      })
    })
  }

  private updateSEO(blog: Blog) {
    this.titleService.setTitle(blog.meta_title ? blog.meta_title : `${blog.title} - Pephands Foundation`);

    // Use our centralized SeoService to automatically handle absolute URL conversion,
    // Open Graph tags, Twitter cards, and standard meta tags simultaneously!
    this.seoService.updateMetaTags({
      title: blog.meta_title || `${blog.title} - Pephands Foundation`,
      description: blog.meta_description,
      image: blog.image,
      keywords: blog.seo_keywords,
    });
  }
}
