import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ModalComponent } from './modal/modal.component';
import { NotificationComponent } from './notification/notification.component';
import { SomethingWentWrongComponent } from './something-went-wrong';
import { SpinnerComponent } from './spinner';

@Component({
  selector: 'alerts-page',
  templateUrl: './base.html',
  styleUrls: ['./base.scss'],
})
export class BasePageComponent {
  mySnackBarRef: any;
  loader!: MatDialogRef<SpinnerComponent>;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    @Inject(PLATFORM_ID) protected platformId: Object
  ) {}

  // Designed
  basicAlert(title: string, button: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const dialogRef: MatDialogRef<ModalComponent, any> = this.dialog.open(
        ModalComponent,
        {
          data: {
            title,
            button,
          },
        }
      );
    }
  }

  // Designed
  textAlert(
    title: string,
    text: string,
    buttonText: string = 'Done'
  ): MatDialogRef<ModalComponent, any> | undefined {
    if (isPlatformBrowser(this.platformId)) {
      const dialogRef: MatDialogRef<ModalComponent, any> = this.dialog.open(
        ModalComponent,
        {
          data: {
            title,
            text,
            button: buttonText,
          },
        }
      );

      return dialogRef;
    }
    return undefined;
  }

  iconAlert(
    title: any,
    text: any,
    callback: any,
    icon: string = 'check-circle',
    color: string = 'success'
  ): void {
    if (isPlatformBrowser(this.platformId)) {
      const dialogRef: MatDialogRef<ModalComponent, any> = this.dialog.open(
        ModalComponent,
        {
          data: {
            icon,
            iconColor: color,
            title,
            text,
            button: 'OK',
          },
        }
      );

      if (callback) {
        dialogRef.afterClosed().subscribe(callback);
      }
    }
  }

  // Designed
  optionsAlert(title: any, text: any, callback: any): void {
    if (isPlatformBrowser(this.platformId)) {
      const dialogRef: MatDialogRef<ModalComponent, any> = this.dialog.open(
        ModalComponent,
        {
          data: {
            icon: 'exclamation-circle',
            iconColor: 'alert',
            title,
            text,
            options: true,
          },
        }
      );

      if (callback) {
        dialogRef.afterClosed().subscribe(callback);
      }
    }
  }

  presentLoader(message: string = 'Please Wait..'): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loader = this.dialog.open(SpinnerComponent, {
        panelClass: 'dialog-transparent',
        disableClose: true,
        data: {
          message: message,
        },
      });
    }
  }

  dismissLoader(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.loader) {
        this.loader.close();
      }
    }
  }

  // designed
  somethingWentWrong(): void {
    this.dismissLoader();
    if (isPlatformBrowser(this.platformId)) {
      const dialogRef: MatDialogRef<SomethingWentWrongComponent, any> =
        this.dialog.open(SomethingWentWrongComponent, {
          panelClass: 'something-went-wrong',
        });
    }
  }

  // showNotification(
  //   message: string,
  //   icon: string = 'thumbs-o-up',
  //   vpos: MatSnackBarVerticalPosition = 'bottom',
  //   hpos: MatSnackBarHorizontalPosition = 'center'
  // ): void {
  //   this.mySnackBarRef = this.snackBar.openFromComponent(
  //     NotificationComponent,
  //     {
  //       data: {
  //         message,
  //         icon,
  //         dismissible: true,
  //       },
  //       duration: 3000,
  //       horizontalPosition: hpos, // 'start' | 'center' | 'end' | 'left' | 'right'
  //       verticalPosition: vpos, // 'top' | 'bottom'
  //       panelClass: ['notification-wrapper'],
  //     }
  //   );
  //   this.mySnackBarRef.instance.snackBarRef = this.mySnackBarRef;
  // }

  showSuccessNotification(
    message: string,
    icon = '',
    vpos: MatSnackBarVerticalPosition = 'top',
    hpos: MatSnackBarHorizontalPosition = 'center',
    duration = 3000
  ): void {
    // for more info about Angular Material snackBar check: https://material.angular.io/components/snack-bar/overview
    this.mySnackBarRef = this.snackBar.openFromComponent(
      NotificationComponent,
      {
        data: {
          message: message,
          icon,
          type: 'success',
          dismissible: true,
          // you can add everything you want here
        },
        duration: duration,
        horizontalPosition: hpos, // 'start' | 'center' | 'end' | 'left' | 'right'
        verticalPosition: vpos, // 'top' | 'bottom'
        panelClass: ['notification-wrapper'],
      }
    );
    // this is to be able to close it from the NotificationComponent
    this.mySnackBarRef.instance.snackBarRef = this.mySnackBarRef;
  }

  showFailureNotification(
    message: string,
    icon = '',
    vpos: MatSnackBarVerticalPosition = 'top',
    hpos: MatSnackBarHorizontalPosition = 'center',
    duration = 3000
  ): void {
    // for more info about Angular Material snackBar check: https://material.angular.io/components/snack-bar/overview
    this.mySnackBarRef = this.snackBar.openFromComponent(
      NotificationComponent,
      {
        data: {
          message: message,
          icon,
          type: 'danger',
          dismissible: true,
          // you can add everything you want here
        },
        duration: duration,
        horizontalPosition: hpos, // 'start' | 'center' | 'end' | 'left' | 'right'
        verticalPosition: vpos, // 'top' | 'bottom'
        panelClass: ['notification-wrapper'],
      }
    );
    // this is to be able to close it from the NotificationComponent
    this.mySnackBarRef.instance.snackBarRef = this.mySnackBarRef;
  }
}
