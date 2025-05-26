import { TestBed } from '@angular/core/testing';

import { ThemelistService } from './themelist.service';

describe('ThemelistService', () => {
  let service: ThemelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
