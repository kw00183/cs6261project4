import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public colorBands: {};
  public colorBandDigit01: {};

  public colorMultiplier: {};
  public colorTolerance: {};

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

    this.colorBandDigit01 = this.digit1Array();

    this.colorMultiplier = [
      {id: 0, name: 'x1 black', multiplier: 1},
      {id: 1, name: 'x10 brown', multiplier: 10},
      {id: 2, name: 'x100 red', multiplier: 100},
      {id: 3, name: 'x1K orange', multiplier: 1000},
      {id: 4, name: 'x10K yellow', multiplier: 10000},
      {id: 5, name: 'x100K green', multiplier: 100000},
      {id: 6, name: 'x1M blue', multiplier: 1000000},
      {id: 7, name: 'x10M violet', multiplier: 10000000},
      {id: 8, name: 'x100M grey', multiplier: 100000000},
      {id: 9, name: 'x1G white', multiplier: 1000000000},
      {id: 10, name: '÷10 gold', multiplier: 0.1},
      {id: 11, name: '÷100 silver', multiplier: 0.01}
    ];

    this.colorTolerance = [
      {id: 0, name: '± 1% brown', tolerance: '± 1%'},
      {id: 1, name: '± 2% red', tolerance: '± 2%'},
      {id: 2, name: '± 3% orange', tolerance: '± 3%'},
      {id: 3, name: '± 4% yellow', tolerance: '± 4%'},
      {id: 4, name: '± 0.5% green', tolerance: '± 0.5%'},
      {id: 5, name: '± 0.25% blue', tolerance: '± 0.25%'},
      {id: 6, name: '± 0.10% violet', tolerance: '± 0.10%'},
      {id: 7, name: '± 0.05% grey', tolerance: '± 0.05%'},
      {id: 8, name: '± 5% gold', tolerance: '± 5%'},
      {id: 9, name: '± 10% silver', tolerance: '± 10%'}
    ];
  }

  ngOnInit(): void {
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  digit1Array() {
    let digit1Array = JSON.parse(JSON.stringify(this.colorBands));
    digit1Array.shift();
    return digit1Array;
  }
}
