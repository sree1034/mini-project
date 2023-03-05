import { Component } from '@angular/core';
import { Router } from '@angular/router';
import GamesService from 'src/app/services/games.service';

@Component({
  selector: 'app-singlerpg',
  templateUrl: './singlerpg.component.html',
  styleUrls: ['./singlerpg.component.css']
})
export class SinglerpgComponent {

  rpgdat: any;
  constructor(private Rpg: GamesService, private router: Router) {}

  ngOnInit(): void {
    let pageid = localStorage.getItem('id');
    let num = Number(pageid);

    let singleDataArray = this.Rpg.getRpg();
    this.rpgdat = singleDataArray.filter((d) => d.id === num);
    console.log(this.rpgdat);
  }


}
