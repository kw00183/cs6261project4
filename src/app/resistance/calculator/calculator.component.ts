import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public colorBands: {id: number, name: string};
  public colorMultiplier: {id: number, name: string, value: number};
  public colorTolerance: {id: number, name: string, value: string};

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
      {id: 0, name: 'x1 black', value: 1},
      {id: 1, name: 'x10 brown', value: 10},
      {id: 2, name: 'x100 red', value: 100},
      {id: 3, name: 'x1K orange', value: 1000},
      {id: 4, name: 'x10K yellow', value: 10000},
      {id: 5, name: 'x100K green', value: 100000},
      {id: 6, name: 'x1M blue', value: 1000000},
      {id: 7, name: 'x10M violet', value: 10000000},
      {id: 8, name: 'x100M grey', value: 100000000},
      {id: 9, name: 'x1G white', value: 1000000000},
      {id: 10, name: '÷10 gold', value: 0.1},
      {id: 11, name: '÷100 silver', value: 0.01}
    ];

    this.colorTolerance = [
      {id: 0, name: '± 1% Brown', value: '± 1%'},
      {id: 1, name: '± 2% Red', value: '± 2%'},
      {id: 2, name: '± 3% Orange', value: '± 3%'},
      {id: 3, name: '± 4% Yellow', value: '± 4%'},
      {id: 4, name: '± 0.5% Green', value: '± 0.5%'},
      {id: 5, name: '± 0.25% Blue', value: '± 0.25%'},
      {id: 6, name: '± 0.10% Violet', value: '± 0.10%'},
      {id: 7, name: '± 0.05% Gray', value: '± 0.05%'},
      {id: 8, name: '± 5% Gold', value: '± 5%'},
      {id: 9, name: '± 10% Silver', value: '± 10%'}
    ];
  }

  ngOnInit(): void {
  }
}
