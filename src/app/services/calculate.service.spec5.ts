import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculateService } from './calculate.service';

describe('CalculateService - calculate correct resistance changing band5 (tolerance)', () => {
  let service: CalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ]
    });
    service = TestBed.inject(CalculateService);
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with black multiplier and brown tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('999 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with black multiplier and red tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1, '± 2%');
    expect(calculateService.getResistance()).toEqual('999 ± 2%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with black multiplier and orange tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1, '± 3%');
    expect(calculateService.getResistance()).toEqual('999 ± 3%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with black multiplier and yellow tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1, '± 4%');
    expect(calculateService.getResistance()).toEqual('999 ± 4%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with black multiplier and green tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1, '± 0.5%');
    expect(calculateService.getResistance()).toEqual('999 ± 0.5%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with black multiplier and blue tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1, '± 0.25%');
    expect(calculateService.getResistance()).toEqual('999 ± 0.25%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with black multiplier and violet tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1, '± 0.10%');
    expect(calculateService.getResistance()).toEqual('999 ± 0.10%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with black multiplier and grey tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1, '± 0.05%');
    expect(calculateService.getResistance()).toEqual('999 ± 0.05%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with black multiplier and gold tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1, '± 5%');
    expect(calculateService.getResistance()).toEqual('999 ± 5%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with black multiplier and silver tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1, '± 10%');
    expect(calculateService.getResistance()).toEqual('999 ± 10%');
  });
});
