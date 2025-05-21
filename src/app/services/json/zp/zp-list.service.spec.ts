import { TestBed } from '@angular/core/testing';

import { ZpListService } from './zp-list.service';

describe('ZpListService', () => {
  let service: ZpListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZpListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
