import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculateService } from './calculate.service';

describe('CalculateService - calculate correct resistance changing band1', () => {
  let service: CalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ]
    });
    service = TestBed.inject(CalculateService);
  });

  it('should calculate correct resistance (bands 1-3: brown=1 black=0 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 0, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('100 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: red=2 black=0 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(2, 0, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('200 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: orange=3 black=0 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(3, 0, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('300 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: yellow=4 black=0 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(4, 0, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('400 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: green=5 black=0 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(5, 0, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('500 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: blue=6 black=0 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(6, 0, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('600 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: violet=7 black=0 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(7, 0, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('700 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: grey=8 black=0 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(8, 0, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('800 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 black=0 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 0, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('900 ± 1%');
  });
});
