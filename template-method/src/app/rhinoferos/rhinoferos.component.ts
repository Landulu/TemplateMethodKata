import { Component, OnInit } from '@angular/core';
import { AbstractCreatureComponent } from '../abstract/AbstractCreatureComponent';

@Component({
  selector: 'app-rhinoferos',
  templateUrl: './rhinoferos.component.html',
  styleUrls: ['./rhinoferos.component.scss']
})
export class RhinoferosComponent extends AbstractCreatureComponent implements OnInit {

  state: number;
  creatureName: String = 'Rhinoferos';
  imagePath: String;

  images = [
    '../../../assets/RhinShiny.jpg_large',
    '../../../assets/RhinNeutral.jpeg',
    '../../../assets/RhinPixel.jpg'
  ];

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
