import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import GamesService from 'src/app/services/games.service';
import Swal from 'sweetalert2';

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
    private route: ActivatedRoute,
    private auth:AuthService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const gameId = Number(params['gameId']);
      this.selectedGame = this.gamesService.getGameById(gameId);
    });
  }

  payNow(id:any) {

    if (this.name == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your name...',
        background: '#212529',
      });
      return;
    }
    if (this.cardnumber == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your card number...',
        background: '#212529',
      });
      return;
    }
    if (this.expiration == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter expiration number...',
        background: '#212529',
      });
      return;
    }
    if (this.cvv == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your cvv number...',
        background: '#212529',
      });
      return;
    }
    
     this.auth.payNow(this.name,this.cardnumber,this.expiration,this.cvv);
     this.name='';
     this.cardnumber='';
     this.expiration='';
     this.cvv='';
    
    // window.parent.location = window.parent.location.href;
    
  }
   
  
}

