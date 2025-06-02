import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyImpactAreaComponent } from './key-impact-area.component';

describe('KeyImpactAreaComponent', () => {
  let component: KeyImpactAreaComponent;
  let fixture: ComponentFixture<KeyImpactAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyImpactAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyImpactAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
