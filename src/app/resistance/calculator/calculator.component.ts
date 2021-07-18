import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public colorBands: string[];
  public colorMultiplier: string[];
  public colorTolerance: string[];

  constructor() {
    this.colorBands = [
      {id: 0, name: '0 black'},
      {id: 1, name: '1 brown'},
      {id: 2, name: '2 red'},
      {id: 3, name: '3 orange'},
      {id: 4, name: '4 yellow'},
      {id: 5, name: '5 green'},
      {id: 6, name: '6 blue'},
      {id: 7, name: '7 violet'},
      {id: 8, name: '8 grey'},
      {id: 9, name: '9 white'}
    ];

    this.colorMultiplier = [
      {id: 0, name: 'x1 black'},
      {id: 1, name: 'x10 brown'},
      {id: 2, name: 'x100 red'},
      {id: 3, name: 'x1K orange'},
      {id: 4, name: 'x10K yellow'},
      {id: 5, name: 'x100K green'},
      {id: 6, name: 'x1M blue'},
      {id: 7, name: 'x10M violet'},
      {id: 8, name: 'x100M grey'},
      {id: 9, name: 'x1G white'},
      {id: 10, name: '÷10 gold'},
      {id: 11, name: '÷100 silver'},
    ];
  }

  ngOnInit(): void {
  }
}
