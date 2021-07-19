import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  public resistance: string;
  public resistance$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() {
    this.resistance = "";
  }

  getResistance() {
    return this.resistance;
  }

  calculateResistance(band1: number, band2: number, band3: number, multiplier: number, tolerance: string): string {
    let digits = parseInt(band1.toString() + band2.toString() + band3.toString());
    let multiply = digits * multiplier;
    this.resistance = this.intToString(multiply) + " " + tolerance;
    this.resistance$.next(this.resistance);
    return this.resistance;
  }

  intToString (value): string {
    let newValue = value;
    let suffixes = ["", "K", "M", "G", "T"];
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }
    newValue = newValue.toPrecision(3);
    newValue += suffixes[suffixNum];
    return newValue;
  }
}
