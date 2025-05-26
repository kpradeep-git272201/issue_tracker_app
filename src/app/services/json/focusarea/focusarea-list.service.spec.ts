import { TestBed } from '@angular/core/testing';

import { FocusareaListService } from './focusarea-list.service';

describe('FocusareaListService', () => {
  let service: FocusareaListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocusareaListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
