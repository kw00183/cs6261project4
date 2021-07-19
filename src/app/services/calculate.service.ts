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

  getResistance(band1: number, band2: number, band3: number, multiplier: number, tolerance: string) {
    let digits = parseInt(band1.toString() + band2.toString() + band3.toString());
    let multiply = digits * multiplier;
    this.resistance = this.intToString(multiply) + " " + tolerance;
    this.resistance$.next(this.resistance);
    return this.resistance;
  }

  intToString (value) {
    let suffixes = ["", "K", "M", "B","T"];
    let suffixNum = Math.floor((value).length/3);
    let shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
    if (shortValue % 1 != 0) {
        let small = parseFloat(shortValue.toFixed(1));
        shortValue = small;
    }
    return shortValue.toString() + suffixes[suffixNum];
  }
}
