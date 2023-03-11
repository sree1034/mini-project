import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import GamesService from 'src/app/services/games.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  selectedGame: any;

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const gameId = Number(params['gameId']);
      this.selectedGame = this.gamesService.getGameById(gameId);
    });
  }
}
