import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component, Inject } from '@angular/core';

import { By } from "@angular/platform-browser";

import { CalculateService } from '../../services/calculate.service';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let calculateService: CalculateService;
  let testCalculateService: CalculateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CalculatorComponent ],
      providers: [ CalculateService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    testCalculateService = TestBed.get(CalculateService);
    fixture.detectChanges();
  });

  beforeEach(inject([CalculateService],
    (service: CalculateService) => {
      calculateService = service;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be the same instance of Service injected via inject(...) and TestBed.get(...)', () => {
    inject([CalculateService], (injectService: CalculateService) => {
        expect(injectService).toBe(testCalculateService);
      })
  });

  it('should return correct resistance with default bands', () => {
    let band1 = component.colorBandDigit1[0]['id'];
    let band2 = component.colorBands[0]['id'];
    let band3 = component.colorBands[0]['id'];
    let band4 = component.colorMultiplier[0]['multiplier'];
    let band5 = component.colorTolerance[0]['tolerance'];
    component.setBands(band1, band2, band3, band4, band5);

    expect(calculateService.getResistance()).toEqual('100 ± 1%');
  });

  it('should return correct resistance with change band1', () => {
    let band1 = component.colorBandDigit1[0]['id'];
    let band2 = component.colorBands[0]['id'];
    let band3 = component.colorBands[0]['id'];
    let band4 = component.colorMultiplier[0]['multiplier'];
    let band5 = component.colorTolerance[0]['tolerance'];
    component.setBands(band1, band2, band3, band4, band5);

    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#digit1')).nativeElement;
    select.value = select.options[3].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(calculateService.getResistance()).toEqual('400 ± 1%');
  });

  it('should return correct resistance with change band2', () => {
    let band1 = component.colorBandDigit1[0]['id'];
    let band2 = component.colorBands[0]['id'];
    let band3 = component.colorBands[0]['id'];
    let band4 = component.colorMultiplier[0]['multiplier'];
    let band5 = component.colorTolerance[0]['tolerance'];
    component.setBands(band1, band2, band3, band4, band5);

    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#digit2')).nativeElement;
    select.value = select.options[6].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(calculateService.getResistance()).toEqual('160 ± 1%');
  });

  it('should return correct resistance with change band3', () => {
    let band1 = component.colorBandDigit1[0]['id'];
    let band2 = component.colorBands[0]['id'];
    let band3 = component.colorBands[0]['id'];
    let band4 = component.colorMultiplier[0]['multiplier'];
    let band5 = component.colorTolerance[0]['tolerance'];
    component.setBands(band1, band2, band3, band4, band5);

    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#digit3')).nativeElement;
    select.value = select.options[2].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(calculateService.getResistance()).toEqual('102 ± 1%');
  });

  it('should return correct resistance with change band4', () => {
    let band1 = component.colorBandDigit1[0]['id'];
    let band2 = component.colorBands[0]['id'];
    let band3 = component.colorBands[0]['id'];
    let band4 = component.colorMultiplier[0]['multiplier'];
    let band5 = component.colorTolerance[0]['tolerance'];
    component.setBands(band1, band2, band3, band4, band5);

    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#multiplier')).nativeElement;
    select.value = select.options[3].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(calculateService.getResistance()).toEqual('100K ± 1%');
  });

  it('should return correct resistance with change band5', () => {
    let band1 = component.colorBandDigit1[0]['id'];
    let band2 = component.colorBands[0]['id'];
    let band3 = component.colorBands[0]['id'];
    let band4 = component.colorMultiplier[0]['multiplier'];
    let band5 = component.colorTolerance[0]['tolerance'];
    component.setBands(band1, band2, band3, band4, band5);

    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#tolerance')).nativeElement;
    select.value = select.options[6].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(calculateService.getResistance()).toEqual('100 ± 0.10%');
  });

  it('should return correct class color for color bands', () => {
    let black = component.colorBands[0]['css'];
    expect(black).toEqual('color-black');

    let brown = component.colorBands[1]['css'];
    expect(brown).toEqual('color-brown');

    let red = component.colorBands[2]['css'];
    expect(red).toEqual('color-red');

    let orange = component.colorBands[3]['css'];
    expect(orange).toEqual('color-orange');

    let yellow = component.colorBands[4]['css'];
    expect(yellow).toEqual('color-yellow');

    let green = component.colorBands[5]['css'];
    expect(green).toEqual('color-green');

    let blue = component.colorBands[6]['css'];
    expect(blue).toEqual('color-blue');

    let violet = component.colorBands[7]['css'];
    expect(violet).toEqual('color-violet');

    let grey = component.colorBands[8]['css'];
    expect(grey).toEqual('color-grey');

    let white = component.colorBands[9]['css'];
    expect(white).toEqual('color-white');
  });

  it('should return correct class color for digit1', () => {
    let brown = component.colorBandDigit1[0]['css'];
    expect(brown).toEqual('color-brown');
    let red = component.colorBandDigit1[1]['css'];
    expect(red).toEqual('color-red');
    let orange = component.colorBandDigit1[2]['css'];
    expect(orange).toEqual('color-orange');
    let yellow = component.colorBandDigit1[3]['css'];
    expect(yellow).toEqual('color-yellow');
    let green = component.colorBandDigit1[4]['css'];
    expect(green).toEqual('color-green');
    let blue = component.colorBandDigit1[5]['css'];
    expect(blue).toEqual('color-blue');
    let violet = component.colorBandDigit1[6]['css'];
    expect(violet).toEqual('color-violet');
    let grey = component.colorBandDigit1[7]['css'];
    expect(grey).toEqual('color-grey');
    let white = component.colorBandDigit1[8]['css'];
    expect(white).toEqual('color-white');
  });

  it('should return correct multiplier', () => {
    let multiplier = component.colorMultiplier[0]['multiplier'];
    expect(multiplier).toEqual(1);
    multiplier = component.colorMultiplier[1]['multiplier'];
    expect(multiplier).toEqual(10);
    multiplier = component.colorMultiplier[2]['multiplier'];
    expect(multiplier).toEqual(100);
    multiplier = component.colorMultiplier[3]['multiplier'];
    expect(multiplier).toEqual(1000);
    multiplier = component.colorMultiplier[4]['multiplier'];
    expect(multiplier).toEqual(10000);
    multiplier = component.colorMultiplier[5]['multiplier'];
    expect(multiplier).toEqual(100000);
    multiplier = component.colorMultiplier[6]['multiplier'];
    expect(multiplier).toEqual(1000000);
    multiplier = component.colorMultiplier[7]['multiplier'];
    expect(multiplier).toEqual(10000000);
    multiplier = component.colorMultiplier[8]['multiplier'];
    expect(multiplier).toEqual(100000000);
    multiplier = component.colorMultiplier[9]['multiplier'];
    expect(multiplier).toEqual(1000000000);
    multiplier = component.colorMultiplier[10]['multiplier'];
    expect(multiplier).toEqual(.1);
    multiplier = component.colorMultiplier[11]['multiplier'];
    expect(multiplier).toEqual(.01);
  });

  it('should return correct tolerance', () => {
    let tolerance = component.colorTolerance[0]['tolerance'];
    expect(tolerance).toEqual('± 1%');
    tolerance = component.colorTolerance[1]['tolerance'];
    expect(tolerance).toEqual('± 2%');
    tolerance = component.colorTolerance[2]['tolerance'];
    expect(tolerance).toEqual('± 3%');
    tolerance = component.colorTolerance[3]['tolerance'];
    expect(tolerance).toEqual('± 4%');
    tolerance = component.colorTolerance[4]['tolerance'];
    expect(tolerance).toEqual('± 0.5%');
    tolerance = component.colorTolerance[5]['tolerance'];
    expect(tolerance).toEqual('± 0.25%');
    tolerance = component.colorTolerance[6]['tolerance'];
    expect(tolerance).toEqual('± 0.10%');
    tolerance = component.colorTolerance[7]['tolerance'];
    expect(tolerance).toEqual('± 0.05%');
    tolerance = component.colorTolerance[8]['tolerance'];
    expect(tolerance).toEqual('± 5%');
    tolerance = component.colorTolerance[9]['tolerance'];
    expect(tolerance).toEqual('± 10%');
  });
});
