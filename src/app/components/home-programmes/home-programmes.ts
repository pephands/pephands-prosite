import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-programmes',
  imports: [CommonModule, RouterLink],
  templateUrl: './home-programmes.html',
  styleUrl: './home-programmes.scss',
})
export class HomeProgrammes {
  activeTab = 0;

  programmes: any = [
    {
      title: 'PepCares',
      subtitle: 'Pephands Palliative Care',
      content:
        'At Pephands, we believe in spreading kindness and support to those who need the most. Our Pain & Palliative Care Service in Tamil Nadu is dedicated to providing dedicated free compassionate care and comfort to individuals and families facing the challenges of serious illness, aging, and end-of-life situations.',
      image: '/home-page/ppl-logo.png',
      flipped: false,
      url: 'pepcares',
    },

    {
      title: 'Super Mom',
      subtitle: 'Encourage breast milk donor',
      content:
        'A woman who cares for other children while also feeding her own child is referred to as a SUPER MOM. Donated breast milk is an incredibly important part of post-natal care in the modern world. Access to donor milk allows babies who cannot breastfeed to get all the nutrients and unique benefits of human milk, helping to support their immune systems, their growth and development, and their overall health and wellbeing.',
      image: '/home-page/supermom-logo.png',
      flipped: false,
      url: 'super-mom',
    },
    {
      title: 'ICH Pepcares Center',
      subtitle: 'Encourage breast milk donor',
      content:
        'A woman who cares for other children while also feeding her own child is referred to as a SUPER MOM. Donated breast milk is an incredibly important part of post-natal care in the modern world. Access to donor milk allows babies who cannot breastfeed to get all the nutrients and unique benefits of human milk, helping to support their immune systems, their growth and development, and their overall health and wellbeing.',
      image: '/home-page/supermom-logo.png',
      flipped: false,
      url: 'super-mom',
    },
    {
      title: 'Neonatal Kitchen',
      subtitle: 'Encourage breast milk donor',
      content:
        'A woman who cares for other children while also feeding her own child is referred to as a SUPER MOM. Donated breast milk is an incredibly important part of post-natal care in the modern world. Access to donor milk allows babies who cannot breastfeed to get all the nutrients and unique benefits of human milk, helping to support their immune systems, their growth and development, and their overall health and wellbeing.',
      image: '/home-page/supermom-logo.png',
      flipped: false,
      url: 'super-mom',
    },
    {
      title: 'Give In Kind',
      subtitle: 'Encourage breast milk donor',
      content:
        'A woman who cares for other children while also feeding her own child is referred to as a SUPER MOM. Donated breast milk is an incredibly important part of post-natal care in the modern world. Access to donor milk allows babies who cannot breastfeed to get all the nutrients and unique benefits of human milk, helping to support their immune systems, their growth and development, and their overall health and wellbeing.',
      image: '/home-page/supermom-logo.png',
      flipped: false,
      url: 'super-mom',
    },
    {
      title: 'Care Fund',
      subtitle: 'Encourage breast milk donor',
      content:
        'A woman who cares for other children while also feeding her own child is referred to as a SUPER MOM. Donated breast milk is an incredibly important part of post-natal care in the modern world. Access to donor milk allows babies who cannot breastfeed to get all the nutrients and unique benefits of human milk, helping to support their immune systems, their growth and development, and their overall health and wellbeing.',
      image: '/home-page/supermom-logo.png',
      flipped: false,
      url: 'super-mom',
    },
    {
      title: 'IAM',
      subtitle: 'Ideas are Made',
      content:
        'IAM, presented by Pephands Foundation was an open forum for students from all backgrounds to present their project ideas. IAM was conducted in 3 stages. With over 1400+ projects from more than 900 institutions, the top 100 projects were selected as a first phase. The top 100 projects were reviewed via live online presentation. From there the top 50 project ideas were filtered. On November 18, 2023.',
      image: '/home-page/iam-logo.png',
      flipped: false,
      url: 'iam',
    },
  ];
}
