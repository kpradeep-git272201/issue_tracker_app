import { TestBed } from '@angular/core/testing';

import { KeyImpactAreasService } from './key-impact-areas.service';

describe('KeyImpactAreasService', () => {
  let service: KeyImpactAreasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyImpactAreasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
