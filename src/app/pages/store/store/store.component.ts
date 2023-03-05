import { Component } from '@angular/core';
import GamesService from 'src/app/services/games.service';
import { Router } from '@angular/router';
import { SinglegameComponent } from '../../singlegame/singlegame/singlegame.component';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  constructor(private hero: GamesService, private router: Router) {}
  store = this.hero.getAdventureGames();

  gotoHere(id: any) {
    localStorage.setItem('id', id);
    this.router.navigate(['/store/' + id]);
  }
}
