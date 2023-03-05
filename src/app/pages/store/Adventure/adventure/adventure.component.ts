import { Component } from '@angular/core';
import GamesService from 'src/app/services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent {

  constructor(private games: GamesService, private router: Router) {}
  adventure= this.games.getAdventureGames();

  gotoHere(id: any) {
    localStorage.setItem('id', id);
    this.router.navigate(['/adventure/' + id]);
  }
}
