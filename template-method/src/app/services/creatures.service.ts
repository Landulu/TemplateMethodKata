import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatureService {

  constructor() { }

  getState(creatureName: String) {
    return Math.floor((Math.random() * 6) + 1);
  }
}
