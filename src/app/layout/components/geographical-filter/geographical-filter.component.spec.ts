import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicalFilterComponent } from './geographical-filter.component';

describe('GeographicalFilterComponent', () => {
  let component: GeographicalFilterComponent;
  let fixture: ComponentFixture<GeographicalFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeographicalFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeographicalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
