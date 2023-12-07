import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginButtonComponent } from './login-button.component';
import { ProfileComponent } from './profile/profile.component';
import { NavController } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, LoginButtonComponent, ProfileComponent],
})
export class HomePageModule {}
