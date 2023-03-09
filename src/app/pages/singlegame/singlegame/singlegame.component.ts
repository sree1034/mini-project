import { Component } from '@angular/core';
import GamesService from 'src/app/services/games.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-singlegame',
  templateUrl: './singlegame.component.html',
  styleUrls: ['./singlegame.component.css'],
})
export class SinglegameComponent {

  
  adven: any;
  adventure:any;

 
  

  pageid = localStorage.getItem('id');
  constructor(private Game: GamesService, private router: Router,private games:GamesService,private activatedroute: ActivatedRoute) {}



  ngOnInit(): void {
    let num = Number(this.pageid);
   

    let singleDataArray = this.Game.getAdventure();
    this.adven = singleDataArray.filter((d) => d.id === num);
    console.log(this.adven);
    
    
  }
 
  gotoHere(id: any) {
    localStorage.setItem('id', id);
    this.router.navigate(['/payment/' + id]);
  }

}