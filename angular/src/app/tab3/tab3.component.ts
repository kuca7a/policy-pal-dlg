import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LogoutButtonComponent } from '../home/logout-button.component';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss'],
})
export class Tab3Component implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
