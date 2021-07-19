import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculateService } from './calculate.service';

describe('CalculateService - calculate correct resistance changing band4 (multiplier)', () => {
  let service: CalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ]
    });
    service = TestBed.inject(CalculateService);
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with black multiplier and default tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1, '± 1%');
    expect(calculateService.getResistance()).toEqual('999 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with brown multiplier and default tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 10, '± 1%');
    expect(calculateService.getResistance()).toEqual('9.99K ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with red multiplier and default tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 100, '± 1%');
    expect(calculateService.getResistance()).toEqual('99.9K ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with orange multiplier and default tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1000, '± 1%');
    expect(calculateService.getResistance()).toEqual('999K ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with yellow multiplier and default tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 10000, '± 1%');
    expect(calculateService.getResistance()).toEqual('9.99M ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with green multiplier and default tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 100000, '± 1%');
    expect(calculateService.getResistance()).toEqual('99.9M ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with blue multiplier and default tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1000000, '± 1%');
    expect(calculateService.getResistance()).toEqual('999M ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with violet multiplier and default tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 10000000, '± 1%');
    expect(calculateService.getResistance()).toEqual('9.99G ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with grey multiplier and default tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 100000000, '± 1%');
    expect(calculateService.getResistance()).toEqual('99.9G ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with white multiplier and default tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 1000000000, '± 1%');
    expect(calculateService.getResistance()).toEqual('999G ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with gold multiplier and default tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 0.1, '± 1%');
    expect(calculateService.getResistance()).toEqual('99.9 ± 1%');
  });

  it('should calculate correct resistance (bands 1-3: white=9 white=9 white=9) with silver multiplier and default tolerance', () => {
    const calculateService = new CalculateService();

    calculateService.calculateResistance(9, 9, 9, 0.01, '± 1%');
    expect(calculateService.getResistance()).toEqual('9.99 ± 1%');
  });
});
