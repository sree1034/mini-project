import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import GamesService from 'src/app/services/games.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  game: any;

  isLoggedIn$: Observable<boolean>;
  constructor(private auths: AuthService, private games: GamesService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.auths.isLoggedIn;
    this.game = this.games.getAllGames();
  }

  logout() {
    this.auths.logout();
  }
}
