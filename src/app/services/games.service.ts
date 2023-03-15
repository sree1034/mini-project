import { Injectable } from '@angular/core';
import { database } from 'src/assets/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class GamesService {
  constructor() {}

  getAllGames() {
    return database.games;
  }

  getTrendingGames() {
    return database.games.filter((games) => games.trending);
  }

  getGamesByCategory(category: string) {
    return database.games.filter((games) => games.category === category);
  }

  getGameById(id: number) {
    return database.games.find((games) => games.id === id);
  }
}
