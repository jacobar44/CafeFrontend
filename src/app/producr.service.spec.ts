import { TestBed } from '@angular/core/testing';

import { ProducrService } from './producr.service';

describe('ProducrService', () => {
  let service: ProducrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
