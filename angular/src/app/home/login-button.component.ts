import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-login-button',
  template: `<ion-button
    (click)="login()"
    color="primary"
    style="width: 200px;"
    class="paragraph01"
    >Log in</ion-button
  >`,
  styles: [
    `
      .paragraph01 {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        text-transform: none;
      }
    `,
  ],
})
export class LoginButtonComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  login() {
    this.auth
      .loginWithRedirect({
        async openUrl(url: string) {
          return Browser.open({ url, windowName: '_self' });
        },
      })
      .subscribe();
  }
}
