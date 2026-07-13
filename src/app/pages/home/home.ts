import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { HomeBlog } from '../../components/home-blog/home-blog';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, HomeBlog],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
