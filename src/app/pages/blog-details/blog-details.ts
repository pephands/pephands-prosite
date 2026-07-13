import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FetchBlogsService, BlogsEditService } from '../../Providers/blogs.service';
import { Blog } from '../../Models/blog';

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
    private cdr: ChangeDetectorRef
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

    // Update Meta tags
    this.metaService.updateTag({ name: 'description', content: blog.meta_description });
    this.metaService.updateTag({ name: 'keywords', content: blog.seo_keywords });

    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: blog.meta_title });
    this.metaService.updateTag({ property: 'og:description', content: blog.meta_description });
    this.metaService.updateTag({ property: 'og:image', content: blog.image });
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
  }
}
