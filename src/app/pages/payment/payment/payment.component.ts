import { Component} from '@angular/core';
import GamesService from 'src/app/services/games.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent{

 
  adventure:any;

 
  

  pageid = localStorage.getItem('id');
  constructor(private Game: GamesService, private router: Router,private games:GamesService) {}



  ngOnInit(): void {
    let num = Number(this.pageid);
   

    let singleDataArray = this.Game.getAdventureGames();
    this.adventure = singleDataArray.filter((d) => d.id === num);
    console.log(this.adventure);
    
    
  }

}
