import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculateService } from './calculate.service';

describe('CalculateService - calculate correct resistance changing band2', () => {
  let service: CalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ]
    });
    service = TestBed.inject(CalculateService);
  });

  it('should calculate correct resistance (bands 1-3: brown=1 brown=1 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 1, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('110 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 red=2 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 2, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('120 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 orange=3 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 3, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('130 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 yellow=4 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 4, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('140 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 green=5 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 5, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('150 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 blue=6 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 6, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('160 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 violet=7 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 7, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('170 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 grey=8 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 8, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('180 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 white=9 black=0) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 9, 0, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('190 ± 1%');
  });
});
