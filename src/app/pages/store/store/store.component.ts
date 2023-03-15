import { Component } from '@angular/core';
import GamesService from 'src/app/services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  games: any = [];
  category: string = '';
  constructor(
    private gamesService: GamesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category = params['category'] || '';
      this.games = this.gamesService.getGamesByCategory(this.category);
      console.log(this.games);
    });
  }

  gotoHere(id: any) {
    localStorage.setItem('id', id);
    this.router.navigate(['store/' + this.category + '/' + id]);
  }
}
