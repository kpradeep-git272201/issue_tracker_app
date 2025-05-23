import { TestBed } from '@angular/core/testing';

import { SchemelistService } from './schemelist.service';

describe('SchemelistService', () => {
  let service: SchemelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchemelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
