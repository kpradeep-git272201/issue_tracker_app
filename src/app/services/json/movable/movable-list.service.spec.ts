import { TestBed } from '@angular/core/testing';

import { MovableListService } from './movable-list.service';

describe('MovableListService', () => {
  let service: MovableListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovableListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
