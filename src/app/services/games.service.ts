import { Injectable } from '@angular/core';
import { action, singlevideo } from 'src/assets/data/data';
import { adventure} from 'src/assets/data/data';
import { rpg } from 'src/assets/data/data';
import { act, adven, rpgdat } from 'src/assets/data/data';


@Injectable({
  providedIn: 'root'
})
export default class GamesService {
 

  constructor() { }
  getAdventureGames(){
    return adventure;
  }

  getActionGames(){
    return action;
  }

  getRpgGames(){
    return rpg
  }

  getAdventure(){
    return adven
  }

  getAction(){
    return act
  }

  getRpg(){
    return rpgdat
  }


}
