import { TestBed } from '@angular/core/testing';

import { MenubarItemsService } from './menubar-items.service';

describe('MenubarItemsService', () => {
  let service: MenubarItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenubarItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
