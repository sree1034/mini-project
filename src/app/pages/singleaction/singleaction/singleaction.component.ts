import { Component } from '@angular/core';
import { Router } from '@angular/router';
import GamesService from 'src/app/services/games.service';

@Component({
  selector: 'app-singleaction',
  templateUrl: './singleaction.component.html',
  styleUrls: ['./singleaction.component.css']
})
export class SingleactionComponent {
  act: any;
  constructor(private Action: GamesService, private router: Router) {}

  ngOnInit(): void {
    let pageid = localStorage.getItem('id');
    let num = Number(pageid);

    let singleDataArray = this.Action.getAction();
    this.act = singleDataArray.filter((d) => d.id === num);
    console.log(this.act);
  }


}
