import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component, Inject } from '@angular/core';

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
    component.changeDigit1(5);

    expect(calculateService.getResistance()).toEqual('500 ± 1%');
  });

  it('should return correct resistance with change band2', () => {
    let band1 = component.colorBandDigit1[0]['id'];
    let band2 = component.colorBands[0]['id'];
    let band3 = component.colorBands[0]['id'];
    let band4 = component.colorMultiplier[0]['multiplier'];
    let band5 = component.colorTolerance[0]['tolerance'];
    component.setBands(band1, band2, band3, band4, band5);
    component.changeDigit2(3);

    expect(calculateService.getResistance()).toEqual('130 ± 1%');
  });

  it('should return correct resistance with change band3', () => {
    let band1 = component.colorBandDigit1[0]['id'];
    let band2 = component.colorBands[0]['id'];
    let band3 = component.colorBands[0]['id'];
    let band4 = component.colorMultiplier[0]['multiplier'];
    let band5 = component.colorTolerance[0]['tolerance'];
    component.setBands(band1, band2, band3, band4, band5);
    component.changeDigit3(5);

    expect(calculateService.getResistance()).toEqual('105 ± 1%');
  });

  it('should return correct resistance with change band4', () => {
    let band1 = component.colorBandDigit1[0]['id'];
    let band2 = component.colorBands[0]['id'];
    let band3 = component.colorBands[0]['id'];
    let band4 = component.colorMultiplier[0]['multiplier'];
    let band5 = component.colorTolerance[0]['tolerance'];
    component.setBands(band1, band2, band3, band4, band5);
    component.changeDigit4(3);

    expect(calculateService.getResistance()).toEqual('100K ± 1%');
  });

  it('should return correct resistance with change band5', () => {
    let band1 = component.colorBandDigit1[0]['id'];
    let band2 = component.colorBands[0]['id'];
    let band3 = component.colorBands[0]['id'];
    let band4 = component.colorMultiplier[0]['multiplier'];
    let band5 = component.colorTolerance[0]['tolerance'];
    component.setBands(band1, band2, band3, band4, band5);
    component.changeDigit5(5);

    expect(calculateService.getResistance()).toEqual('100 ± 0.25%');
  });
});
