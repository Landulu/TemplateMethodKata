import { Component, OnInit, ElementRef } from '@angular/core';
import { AbstractCreatureComponent } from '../abstract/AbstractCreatureComponent';
import { CreatureService } from '../services/creatures.service';

@Component({
  selector: 'app-rhinoferos',
  templateUrl: './rhinoferos.component.html',
  styleUrls: ['./rhinoferos.component.scss']
})
export class RhinoferosComponent extends AbstractCreatureComponent implements OnInit {

  state: number;
  creatureName: String = 'Rhinoferos';
  imagePath: String;
  moodMessage: String;
  fontColor: String =  '#0000000';
  isStagnating = false;

  images = [
    '../../../assets/RhinShiny.jpg_large',
    '../../../assets/RhinNeutral.jpeg',
    '../../../assets/RhinPixel.jpg'
  ];

  moodMessages = [
    'Rhinoferos a gagné son combat de boxe',
    'Rhinoferos part en pause clope',
    'Rhinoferos a perdu son combat de boxe'
  ];

  colors = [
    '#00FF00',
    '#0000FF',
    '#FF0000'
  ];

  constructor(private elementRef: ElementRef,
    private creatureService: CreatureService) {
    super();
  }

  ngOnInit() {
    this.initState();
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#FFFFFF';
  }


  onCheckRhinoferosState() {
    const storedState = +JSON.parse(localStorage.getItem('rhinoferosState'));
    if (storedState == null) {
      this.initState();
    } else {
      let newState = this.creatureService.getState(this.creatureName);
      newState += this.applyStateModifier(storedState);

      if (storedState < newState) {
        this.onStateImproving();
      } else if (storedState > newState) {
        this.onStateWorsen();
      } else {
        this.onStageStagnation();
      }
      this.updateStoredState(newState);
      this.state = newState;
    }

  }

  initState() {
    this.state = +JSON.parse(localStorage.getItem('rhinoferosState'));
    if (this.state == null) {
      this.state = this.creatureService.getState(this.creatureName);
      this.state += this.applyStateModifier(this.state);
      localStorage.setItem('rhinoferosState', JSON.stringify(this.state));
    }
    this.setImage(1);
    this.moodMessage = '';
  }

  updateStoredState(newState: number) {
    localStorage.setItem('rhinoferosState', JSON.stringify(newState));
  }

  onStageStagnation() {
    this.setImage(1);
    this.setMoodMessage(1);
    this.setMoodMessageColor(1);
    this.isStagnating = true;
  }

  onStateWorsen() {
    this.setImage(2);
    this.setMoodMessage(2);
    this.setMoodMessageColor(2);
    this.isStagnating = false;
  }

  onStateImproving() {
    this.setImage(0);
    this.setMoodMessage(0);
    this.setMoodMessageColor(0);
    this.isStagnating = false;
  }

  setImage(index: number) {
    this.imagePath = this.images[index];
  }

  setMoodMessage(index: number) {
    this.moodMessage = this.moodMessages[index];
  }


  setMoodMessageColor(index: number) {
    this.fontColor = this.colors[index];
  }

  applyStateModifier(storedState): number {
    const storedRivalState = +JSON.parse(localStorage.getItem('hamtaroState'));
      if (storedRivalState  && storedRivalState > storedState) {
        return -1;
      } else {
        return 1;
      }
  }

}
