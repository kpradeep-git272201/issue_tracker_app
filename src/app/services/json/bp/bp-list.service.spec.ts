import { TestBed } from '@angular/core/testing';

import { BpListService } from './bp-list.service';

describe('BpListService', () => {
  let service: BpListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
