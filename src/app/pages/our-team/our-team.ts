import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta } from '@angular/platform-browser';

interface TeamMember {
  name: string;
  role: string;
  desc: string;
  image: string;
  tier: number; // For grouping in UI
}

@Component({
  selector: 'app-our-team',
  imports: [CommonModule, RouterModule],
  templateUrl: './our-team.html',
  styleUrl: './our-team.scss',
})
export class OurTeam implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({ property: 'og:image', content: 'https://pephands-prosite.web.app/logos/pephands-foundation.png' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://pephands-prosite.web.app/logos/pephands-foundation.png' });
  }
  team: TeamMember[] = [
    {
      name: 'PRABHU SHANKAR',
      role: 'DIRECTOR',
      desc: 'Visionary leader, passionate about innovation & collaboration.',
      image: '/team/prabhu shankar.png',
      tier: 1,
    },
    {
      name: 'HARIKRISHNAN',
      role: 'DIRECTOR',
      desc: 'Visionary leader, passionate about innovation & collaboration.',
      image: '/team/harikrishnan.png',
      tier: 1,
    },
    {
      name: 'KISHAR AHMED',
      role: 'CEO',
      desc: 'Driving growth and sustainable strategy in all aspects.',
      image: '/team/kishar.jpeg',
      tier: 2,
    },
    {
      name: 'DR. S. GANGADHARAN',
      role: 'ADVISOR',
      desc: 'Advisory Committee - Health',
      image: '/team/placeholder.png',
      tier: 2,
    },
    {
      name: 'SHAMEEMA BEGUM',
      role: 'CAO',
      desc: 'Chief Administrative Officer',
      image: '/team/shameema.png',
      tier: 3,
    },
    // { name: 'SIVASANKAR', role: 'RDM', desc: 'Resource Development Manager', image: '/team/placeholder.png', tier: 3 },
    {
      name: 'FARZANA BEGUM',
      role: 'PROJECT MANAGER',
      desc: 'Health and Wellness',
      image: '/team/farzana.jpg',
      tier: 3,
    },
    {
      name: 'ABIRAMI',
      role: 'HEAD - SW',
      desc: 'Head - Social Workers',
      image: '/team/abirami.png',
      tier: 4,
    },
    {
      name: 'THIRUPPATHI',
      role: 'PROJECT MANAGER',
      desc: 'Animal Welfare',
      image: '/team/thiruppathi.png',
      tier: 4,
    },
    {
      name: 'JANANI',
      role: 'PRM',
      desc: 'Public Relations Manager',
      image: '/team/placeholder.png',
      tier: 4,
    },
    {
      name: 'SATHISH',
      role: 'FIELD CO-ORDINATOR',
      desc: 'Health, Food',
      image: '/team/placeholder.png',
      tier: 5,
    },
    {
      name: 'MOHAMMED IDRIS',
      role: 'FIELD EXECUTIVE',
      desc: 'Health, Food, Animal Welfare',
      image: '/team/idris.png',
      tier: 5,
    },
    {
      name: 'MAITHREYA',
      role: 'SUPPORTER & VOLUNTEER',
      desc: 'Health, Food, Animal Welfare',
      image: '/team/maithreya.jpg',
      tier: 5,
    },
  ];

  getTier(tierLevel: number): TeamMember[] {
    return this.team.filter((member) => member.tier === tierLevel);
  }
}
