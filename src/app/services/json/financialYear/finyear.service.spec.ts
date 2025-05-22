import { TestBed } from '@angular/core/testing';

import { FinyearService } from './finyear.service';

describe('FinyearService', () => {
  let service: FinyearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinyearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
