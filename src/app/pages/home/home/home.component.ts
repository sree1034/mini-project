import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SinglegameComponent } from '../../singlegame/singlegame/singlegame.component';
import GamesService from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  database = [
    {
      image:
        './assets/images/nfscarou.jpg',
    },
    {
      image: './assets/images/lastcarou.jpg',
    },
    {
      image: './assets/images/unchartedcarou.jpg',
    },
    {
      image: './assets/images/plaguecarou.jpg',
    },
    {
      image:
        './assets/images/spidercarou.jpg',
    },
    {
      image: './assets/images/milescarou.jpg',
    },
    {
      image: './assets/images/godcarou.jpg',
    },
    {
      image: './assets/images/gothamcarou.jpg',
    },
    {
      image: './assets/images/hogcarou.jpg',
    },
  ];

  constructor(private hero: GamesService, private router: Router) {}

  trendingGames = this.hero.getAdventureGames().filter(game => game.trending);

  gotoHere(id: any): void {
    localStorage.setItem('id', id);
    this.router.navigate(['/adventure/' + id]);
  }

  
}
