import { Component } from '@angular/core';
import GamesService from 'src/app/services/games.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-singlegame',
  templateUrl: './singlegame.component.html',
  styleUrls: ['./singlegame.component.css'],
})
export class SinglegameComponent {

  
  adven: any;
  adventure:any;

 
  

  pageid = localStorage.getItem('id');
  isLoggedIn$: Observable<boolean>;  
  constructor(private Game: GamesService, private router: Router,private games:GamesService,private auth:AuthService) {}



  ngOnInit(): void {
    let num = Number(this.pageid);
   

    let singleDataArray = this.Game.getAdventure();
    this.adven = singleDataArray.filter((d) => d.id === num);
    console.log(this.adven);
    
    this.isLoggedIn$ = this.auth.isLoggedIn; 
  }
 
  gotoPayment(id: any) {
    localStorage.setItem('id', id);

    this.router.navigate(['/payment/' + id]);
  }

  gotoLogin(id: any){
    this.router.navigate(['login'], { queryParams: { redirectUrl: '/payment/' + id }});
  }

}