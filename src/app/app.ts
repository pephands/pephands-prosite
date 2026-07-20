import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { VolunteerAd } from './components/volunteer-ad/volunteer-ad';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule, Header, Footer, VolunteerAd],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pephands-foundation');
}
