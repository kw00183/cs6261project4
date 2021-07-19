import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculateService } from './calculate.service';

describe('CalculateService - calculate correct resistance changing band3', () => {
  let service: CalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ]
    });
    service = TestBed.inject(CalculateService);
  });

  it('should calculate correct resistance (bands 1-3: brown=1 black=0 brown=1) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 0, 1, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('101 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 black=0 red=2) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 0, 2, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('102 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 black=0 orange=3) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 0, 3, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('103 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 black=0 yellow=4) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 0, 4, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('104 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 black=0 green=5) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 0, 5, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('105 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 black=0 blue=6) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 0, 6, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('106 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 black=0 violet=7) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 0, 7, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('107 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 black=0 grey=8) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 0, 8, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('108 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: brown=1 black=0 white=9) with default multiplier and tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(1, 0, 9, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('109 ± 1%');
  });
});
