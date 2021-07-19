import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculateService } from '../../services/calculate.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public colorBands: {};
  public colorBandDigit1: {};

  public colorMultiplier: {};
  public colorTolerance: {};

  public colorBand1CSS: string;
  public colorBand2CSS: string;
  public colorBand3CSS: string;
  public colorBand4CSS: string;
  public colorBand5CSS: string;

  public band1: number;
  public band2: number;
  public band3: number;
  public band4: number;
  public band5: string;

  public observableResistance: string = "";

  constructor(private calculateService: CalculateService) {
    this.colorBands = [
      {id: 0, name: '0 black', css: 'color-black'},
      {id: 1, name: '1 brown', css: 'color-brown'},
      {id: 2, name: '2 red', css: 'color-red'},
      {id: 3, name: '3 orange', css: 'color-orange'},
      {id: 4, name: '4 yellow', css: 'color-yellow'},
      {id: 5, name: '5 green', css: 'color-green'},
      {id: 6, name: '6 blue', css: 'color-blue'},
      {id: 7, name: '7 violet', css: 'color-violet'},
      {id: 8, name: '8 grey', css: 'color-grey'},
      {id: 9, name: '9 white', css: 'color-white'}
    ];

    this.colorBandDigit1 = this.digit1Array();

    this.colorMultiplier = [
      {id: 0, name: 'x1 black', multiplier: 1, css: 'color-black'},
      {id: 1, name: 'x10 brown', multiplier: 10, css: 'color-brown'},
      {id: 2, name: 'x100 red', multiplier: 100, css: 'color-red'},
      {id: 3, name: 'x1K orange', multiplier: 1000, css: 'color-orange'},
      {id: 4, name: 'x10K yellow', multiplier: 10000, css: 'color-yellow'},
      {id: 5, name: 'x100K green', multiplier: 100000, css: 'color-green'},
      {id: 6, name: 'x1M blue', multiplier: 1000000, css: 'color-blue'},
      {id: 7, name: 'x10M violet', multiplier: 10000000, css: 'color-violet'},
      {id: 8, name: 'x100M grey', multiplier: 100000000, css: 'color-grey'},
      {id: 9, name: 'x1G white', multiplier: 1000000000, css: 'color-white'},
      {id: 10, name: '÷10 gold', multiplier: .1, css: 'color-gold'},
      {id: 11, name: '÷100 silver', multiplier: .01, css: 'color-silver'}
    ];

    this.colorTolerance = [
      {id: 0, name: '± 1% brown', tolerance: '± 1%', css: 'color-brown'},
      {id: 1, name: '± 2% red', tolerance: '± 2%', css: 'color-red'},
      {id: 2, name: '± 3% orange', tolerance: '± 3%', css: 'color-orange'},
      {id: 3, name: '± 4% yellow', tolerance: '± 4%', css: 'color-yellow'},
      {id: 4, name: '± 0.5% green', tolerance: '± 0.5%', css: 'color-green'},
      {id: 5, name: '± 0.25% blue', tolerance: '± 0.25%', css: 'color-blue'},
      {id: 6, name: '± 0.10% violet', tolerance: '± 0.10%', css: 'color-violet'},
      {id: 7, name: '± 0.05% grey', tolerance: '± 0.05%', css: 'color-grey'},
      {id: 8, name: '± 5% gold', tolerance: '± 5%', css: 'color-gold'},
      {id: 9, name: '± 10% silver', tolerance: '± 10%', css: 'color-silver'}
    ];

    this.colorBand1CSS = this.colorBandDigit1[0]['css'];
    this.colorBand2CSS = this.colorBands[0]['css'];
    this.colorBand3CSS = this.colorBands[0]['css'];
    this.colorBand4CSS = this.colorMultiplier[0]['css'];
    this.colorBand5CSS = this.colorTolerance[0]['css'];

    this.band1 = this.colorBandDigit1[0]['id'];
    this.band2 = this.colorBands[0]['id'];
    this.band3 = this.colorBands[0]['id'];
    this.band4 = this.colorMultiplier[0]['multiplier'];
    this.band5 = this.colorTolerance[0]['tolerance'];

    this.setBands(this.band1, this.band2, this.band3, this.band4, this.band5);
  }

  ngOnInit(): void {
    this.calculateService.resistance$.subscribe(resistance => {
      this.observableResistance = resistance;
    });
  }

  digit1Array() {
    let digit1Array = JSON.parse(JSON.stringify(this.colorBands));
    digit1Array.shift();
    return digit1Array;
  }

  setBands(band1, band2, band3, multiplier, tolerance) {
    this.calculateService.calculateResistance(band1, band2, band3, multiplier, tolerance);
  }

  changeDigit1(event) {
    let newId = parseInt(event.target.value) - 1;
    this.colorBand1CSS = this.colorBandDigit1[newId]['css'];
    this.band1 = this.colorBandDigit1[newId]['id'];
    this.setBands(this.band1, this.band2, this.band3, this.band4, this.band5);
  }

  changeDigit2(event) {
    this.colorBand2CSS = this.colorBands[event.target.value]['css'];
    this.band2 = this.colorBands[event.target.value]['id'];
    this.setBands(this.band1, this.band2, this.band3, this.band4, this.band5);
  }

  changeDigit3(event) {
    this.colorBand3CSS = this.colorBands[event.target.value]['css'];
    this.band3 = this.colorBands[event.target.value]['id'];
    this.setBands(this.band1, this.band2, this.band3, this.band4, this.band5);
  }

  changeMultiplier(event) {
    this.colorBand4CSS = this.colorMultiplier[event.target.value]['css'];
    this.band4 = this.colorMultiplier[event.target.value]['multiplier'];
    this.setBands(this.band1, this.band2, this.band3, this.band4, this.band5);
  }

  changeTolerance(event) {
    this.colorBand5CSS = this.colorTolerance[event.target.value]['css'];
    this.band5 = this.colorTolerance[event.target.value]['tolerance'];
    this.setBands(this.band1, this.band2, this.band3, this.band4, this.band5);
  }
}
