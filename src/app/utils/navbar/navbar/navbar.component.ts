import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private auths: AuthService) {}

  loggedInUser = sessionStorage.getItem('token') ? true : false;

  logout() {
    this.auths.logout();
  }

}
