import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculateService } from './calculate.service';

describe('CalculateService', () => {
  let service: CalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ]
    });
    service = TestBed.inject(CalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

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
