import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

interface Founder {
  name: string;
  role: string;
  desc: string;
  brief: string;
  image: string;
}

@Component({
  selector: 'app-founders-trustees',
  imports: [CommonModule, RouterModule],
  templateUrl: './founders-trustees.html',
  styleUrl: './founders-trustees.scss',
})
export class FoundersTrustees implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    const pageTitle = 'Our Founders and Trustees - Pephands Foundation';
    const pageDesc = 'Meet the visionary leaders of Pephands Foundation. Discover the team driving innovation, sustainable growth, and our core missions.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDesc });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: pageDesc });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: pageDesc });
    this.meta.updateTag({ property: 'og:image', content: 'https://pephands-prosite.web.app/team/kishar.jpeg' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://pephands-prosite.web.app/team/kishar.jpeg' });
  }
  founders: Founder[] = [
    {
      name: 'PRABHU SHANKAR',
      role: 'DIRECTOR',
      desc: 'Visionary leader, passionate about innovation & collaboration.',
      brief: 'Prabhu Shankar brings over two decades of transformative leadership experience to the Pephands Foundation. With a profound commitment to social equity and community empowerment, he has spearheaded numerous initiatives that bridge the gap between resources and those in need. His visionary approach combines modern innovation with grassroots collaboration, ensuring that our programs are both scalable and deeply impactful. Under his guidance, the Foundation has expanded its reach, fostering partnerships that drive sustainable change across multiple sectors.',
      image: '/team/prabhu shankar.png'
    },
    {
      name: 'HARIKRISHNAN',
      role: 'DIRECTOR',
      desc: 'Visionary leader, passionate about innovation & collaboration.',
      brief: 'Harikrishnan is a cornerstone of the Pephands Foundation, renowned for his strategic foresight and dedication to humanitarian causes. With a rich background in organizational development and social work, he plays a critical role in shaping the foundation’s long-term objectives. Harikrishnan is deeply passionate about creating inclusive platforms that empower marginalized communities. His hands-on leadership style and unwavering focus on innovation continue to inspire our volunteers and drive the success of our core missions.',
      image: '/team/harikrishnan.png'
    },
    {
      name: 'KISHAR AHMED',
      role: 'CEO',
      desc: 'Driving growth and sustainable strategy in all aspects.',
      brief: 'As the Chief Executive Officer, Kishar Ahmed is the driving force behind the operational excellence and strategic growth of the Pephands Foundation. With exceptional expertise in sustainable strategy and resource management, he ensures that every initiative aligns with our core values while maximizing social return on investment. Kishar’s dynamic leadership fosters a culture of transparency, accountability, and continuous improvement, empowering our entire team to deliver life-changing impact to the communities we serve.',
      image: '/team/kishar.jpeg'
    }
  ];
}
