import { Component } from '@angular/core';
import { Router } from '@angular/router';
import GamesService from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  carouselImages = [
    './assets/images/nfscarou.jpg',
    './assets/images/lastcarou.jpg',
    './assets/images/unchartedcarou.jpg',
    './assets/images/plaguecarou.jpg',
    './assets/images/spidercarou.jpg',
    './assets/images/milescarou.jpg',
    './assets/images/godcarou.jpg',
    './assets/images/gothamcarou.jpg',
    './assets/images/hogcarou.jpg',
  ];

  constructor(private games: GamesService, private router: Router) {}

  trendingGames = this.games.getTrendingGames();

  gotoHere(id: any, category: string): void {
    this.router.navigate(['store/' + category + '/' + id]);
  }
}
