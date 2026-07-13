import {
  Component,
  Inject,
  Input,
  OnInit,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'notification',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDialogModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NotificationComponent implements OnInit {
  @Input('message') message;
  // @Input('text') text;
  @Input('icon') icon;
  @Input('type') type = false;
  @Input('dismissible') dismissible = false;

  baseClass = 'notification alert';
  classes = '';

  /** The instance of the component making up the content of the snack bar. */
  snackBarRef!: MatSnackBarRef<NotificationComponent>;

  constructor(@Optional() @Inject(MAT_SNACK_BAR_DATA) public data: any) {
    if (data) {
      this.message = data.message;
      this.icon = data.icon;
      this.type = data.type;
      this.dismissible = data.dismissible;
    }
  }

  /** Dismisses the snack bar. */
  dismiss(): void {
    this.snackBarRef.dismiss();
  }

  ngOnInit(): void {
    this.classes = this.baseClass;
    this.classes += this.dismissible ? ' alert-dismissible' : '';
    this.classes += this.type ? ' alert-' + this.type : '';
  }
}
