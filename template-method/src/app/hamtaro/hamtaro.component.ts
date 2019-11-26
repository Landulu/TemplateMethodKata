import { Component, OnInit } from '@angular/core';
import { AbstractCreatureComponent } from '../abstract/AbstractCreatureComponent';
import { CreatureService } from '../services/creatures.service';

@Component({
  selector: 'app-hamtaro',
  templateUrl: './hamtaro.component.html',
  styleUrls: ['./hamtaro.component.scss']
})
export class HamtaroComponent extends AbstractCreatureComponent implements OnInit  {

  state: number;
  creatureName: String = 'Hamtaro';
  imagePath: String;
  moodMessage: String;

  images = [
    '../../../assets/HamtaroHappy.png',
    '../../../assets/HamtaroNeutral.jpg',
    '../../../assets/HamtaroSad.jpeg'
  ];


  constructor(private creatureService: CreatureService) {
    super();
  }

  ngOnInit() {
    this.initState();
  }

  onCheckHamtaroState() {
    const storedState = JSON.parse(localStorage.getItem('hamtaroState'));
    if (storedState == null) {
      this.initState();
    } else {
      
      console.log(storedState);
      const newState = this.creatureService.getState(this.creatureName);
      if (storedState > newState) {
        this.onStateImproving();
      } else if (storedState < newState) {
        this.onStateWorsen();
      } else {
        this.onStageStagnation();
      }
      this.updateStoredState(newState);
      this.state = newState;
    }

  }

  updateStoredState(newState: number) {
    localStorage.setItem('hamtaroState', JSON.stringify(newState));
  }

  onStageStagnation() {
    this.setImage(1);
  }

  onStateWorsen() {
    this.setImage(2);
  }

  onStateImproving() {
    this.setImage(0);
  }

  initState() {
    this.state = +JSON.parse(localStorage.getItem('hamtaroState'));
    if (this.state == null) {
      this.state = this.creatureService.getState(this.creatureName);
      localStorage.setItem('hamtaroState', JSON.stringify(this.state));
    }
    this.setImage(1);
  }

  setImage(index: number) {
    console.log('image change ' + index);
    this.imagePath = this.images[index];
  }

}
