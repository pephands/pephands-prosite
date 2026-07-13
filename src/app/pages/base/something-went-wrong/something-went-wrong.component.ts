import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'something-went-wrong',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './something-went-wrong.component.html',
  styleUrls: ['./something-went-wrong.component.scss'],
})
export class SomethingWentWrongComponent {
  constructor(public dialogRef: MatDialogRef<SomethingWentWrongComponent>) {}
}
