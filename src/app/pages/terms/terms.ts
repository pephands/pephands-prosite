import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterModule, Header, Footer],
  templateUrl: './terms.html',
  styleUrl: './terms.css'
})
export class TermsAndConditions {
  lastUpdated: string = '13 July 2026';
}
