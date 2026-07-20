import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { HomeBlog } from '../../components/home-blog/home-blog';
import { HomeHero } from '../../components/home-hero/home-hero';
import { HomeAboutComponent } from '../../components/home-about/home-about';
import { HomeSpecialday } from '../../components/home-specialday/home-specialday';
import { HomeMedical } from '../../components/home-medical/home-medical';
import { HomeSdg } from '../../components/home-sdg/home-sdg';
import { HomeRecentevents } from '../../components/home-recentevents/home-recentevents';
import { HomeEducation } from '../../components/home-education/home-education';
import { HomePartners } from '../../components/home-partners/home-partners';
import { HomeCarefund } from '../../components/home-carefund/home-carefund';
import { HomeGiveinkind } from '../../components/home-giveinkind/home-giveinkind';
import { HomeProgrammes } from '../../components/home-programmes/home-programmes';
import { HomeCounts } from '../../components/home-counts/home-counts';
import { HomeActions } from '../../components/home-actions/home-actions';

@Component({
  selector: 'app-home',
  imports: [
    MaterialModule,
    HomeCounts,
    HomeBlog,
    HomeHero,
    HomeAboutComponent,
    HomeSpecialday,
    HomeMedical,
    HomeSdg,
    HomeCarefund,
    HomeRecentevents,
    HomeEducation,
    HomePartners,
    HomeGiveinkind,
    HomeProgrammes,
    HomeActions,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
