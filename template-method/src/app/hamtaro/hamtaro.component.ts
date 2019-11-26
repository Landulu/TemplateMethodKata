import { Component, OnInit, ElementRef } from '@angular/core';
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

  moodMessages = [ 
    'Hamtaro a bien mangé',
    'Hamtaro en prends bonne note',
    'Quelqu\'un a parlé de RGPD à Hamtaro'
  ]

  colors = [
    '#CBFFC0',
    '#FEF1B9',
    '#FFC0CB'
  ];


  constructor(private creatureService: CreatureService,
    private elementRef: ElementRef) {
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
    this.setMoodMessage(1);
    this.setMoodColor(1);
  }
  
  onStateWorsen() {
    this.setImage(2);
    this.setMoodMessage(2);
    this.setMoodColor(1);
  }
  
  onStateImproving() {
    this.setImage(0);
    this.setMoodMessage(0);
    this.setMoodColor(1);
  }
  
  initState() {
    this.state = +JSON.parse(localStorage.getItem('hamtaroState'));
    if (this.state == null) {
      this.state = this.creatureService.getState(this.creatureName);
      localStorage.setItem('hamtaroState', JSON.stringify(this.state));
    }
    this.setImage(1);
    this.moodMessage = '';
  }

  setImage(index: number) {
    console.log('image change ' + index);
    this.imagePath = this.images[index];
  }
  
  setMoodMessage(index: number) {
    this.moodMessage = this.moodMessages[index];
  }
  
  setMoodColor(index: number) {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.colors[index];
  }
}
