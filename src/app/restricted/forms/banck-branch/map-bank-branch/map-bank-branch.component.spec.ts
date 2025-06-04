import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBankBranchComponent } from './map-bank-branch.component';

describe('MapBankBranchComponent', () => {
  let component: MapBankBranchComponent;
  let fixture: ComponentFixture<MapBankBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapBankBranchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapBankBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
