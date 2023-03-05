import { Component } from '@angular/core';
import { Router } from '@angular/router';
import GamesService from 'src/app/services/games.service';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.css']
})
export class RpgComponent {

  constructor(private games: GamesService, private router: Router) {}
  rpg = this.games.getRpgGames();

  gotoHere(id: any) {
    localStorage.setItem('id', id);
    this.router.navigate(['/rpg/' + id]);
  }

}
