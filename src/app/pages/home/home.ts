import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { HomeBlog } from '../../components/home-blog/home-blog';
import { HomeHero } from '../../components/home-hero/home-hero';
import { HomeAboutComponent } from '../../components/home-about/home-about';
import { HomeSpecialday } from '../../components/home-specialday/home-specialday';
import { HomeSdg } from '../../components/home-sdg/home-sdg';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, HomeBlog, HomeHero, HomeAboutComponent, HomeSpecialday, HomeSdg],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
