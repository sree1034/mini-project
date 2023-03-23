import { Component } from '@angular/core';
import GamesService from 'src/app/services/games.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-singlegame',
  templateUrl: './singlegame.component.html',
  styleUrls: ['./singlegame.component.css'],
})
export class SinglegameComponent {
  selectedGame: any;
  adventure: any;
  

  pageid = localStorage.getItem('id');
  isLoggedIn$: Observable<boolean>;
  constructor(
    private gamesService: GamesService,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const gameId = Number(params['gameId']);
      this.selectedGame = this.gamesService.getGameById(gameId);
    });
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }

  gotoPayment(id: any) {
    localStorage.setItem('id', id);
    this.router.navigate(['/payment/' + id]);
    const details={
      Id:this.selectedGame.id,
      Name:this.selectedGame.name,
      Category:this.selectedGame.category,
      Price:this.selectedGame.price
    } 
    
    this.auth.gotoPayment(details)
   
    } 
    
  gotoLogin(id: any) {
    this.router.navigate(['login'], {
      queryParams: { redirectUrl: '/payment/' + id },
    });
  }
}



