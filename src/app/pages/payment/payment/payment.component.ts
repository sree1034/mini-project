import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import GamesService from 'src/app/services/games.service';
import Swal from 'sweetalert2';
import { RadioControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  selectedGame: any;
  data: any;

  name: string = '';
  cardnumber: string = '';
  expiration: string = '';
  cvv: string = '';

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

  payNow() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Payment Done Successfully...',
      background: '#212529',
      showConfirmButton: false,
      timer: 2000,
    });
  }
}
