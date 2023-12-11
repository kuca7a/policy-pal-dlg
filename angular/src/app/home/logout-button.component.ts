import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { AlertController } from '@ionic/angular';
import { callbackUri } from '../auth.config';

@Component({
  selector: 'app-logout-button',
  template: `<ion-button (click)="presentAlert()">Log out</ion-button>`,
})
export class LogoutButtonComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Logout',
          handler: () => {
            this.logout();
          },
        },
      ],
    });

    await alert.present();
  }

  logout() {
    this.auth
      .logout({
        logoutParams: {
          returnTo: callbackUri,
        },
        async openUrl(url: string) {
          return Browser.open({ url, windowName: '_self' });
        },
      })
      .subscribe();
  }
}
