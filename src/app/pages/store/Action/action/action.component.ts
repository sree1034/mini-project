import { Component } from '@angular/core';
import { Router } from '@angular/router';
import GamesService from 'src/app/services/games.service';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {
  constructor(private games: GamesService, private router: Router) {}
  action = this.games.getActionGames();

  gotoHere(id: any) {
    localStorage.setItem('id', id);
    this.router.navigate(['/action/' + id]);
  }

}
