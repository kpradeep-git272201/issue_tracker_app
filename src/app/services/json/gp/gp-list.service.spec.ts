import { TestBed } from '@angular/core/testing';

import { GpListService } from './gp-list.service';

describe('GpListService', () => {
  let service: GpListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
