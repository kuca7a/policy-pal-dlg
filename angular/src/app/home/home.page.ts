import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public auth: AuthService, private navCtrl: NavController) {
    this.auth.user$.subscribe((user) => {
      // Check if the user is authenticated
      if (user) {
        // Redirect to another tab after successful login
        this.redirectToAnotherTab();
      }
    });
  }

  redirectToAnotherTab() {
    // Example: Redirect to a tab with the path '/tabs/tab-id'
    this.navCtrl.navigateRoot('/tabs');
  }
}
