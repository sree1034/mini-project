import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import GamesService from 'src/app/services/games.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  game: any;

  isLoggedIn$: Observable<boolean>;
  constructor(private auths: AuthService, private games: GamesService,private router:Router,private route:ActivatedRoute) {}

  ngOnInit() {
    this.isLoggedIn$ = this.auths.isLoggedIn;
    this.game = this.games.getAllGames();
  }
  

  logout() {
    this.auths.logout();
  }
}
