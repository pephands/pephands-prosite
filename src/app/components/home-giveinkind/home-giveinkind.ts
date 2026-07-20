import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-home-giveinkind',
  imports: [RouterLink, MaterialModule],
  templateUrl: './home-giveinkind.html',
  styleUrl: './home-giveinkind.css',
})
export class HomeGiveinkind {}
