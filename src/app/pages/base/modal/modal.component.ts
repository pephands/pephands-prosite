import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'ngx-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  templateUrl: 'modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  icon: undefined;
  iconColor: undefined;
  title: '';
  text: undefined;
  options: false;
  input: false;
  button: undefined;
  inputData: '' | undefined;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.icon = data.icon;
    this.iconColor = data.iconColor;
    this.title = data.title;
    this.text = data.text;
    this.options = data.options;
    this.input = data.input;
    this.button = data.button;

    if (data.time) {
      setTimeout(() => {
        this.dialogRef.close();
      }, data.time);
    }
  }
}
