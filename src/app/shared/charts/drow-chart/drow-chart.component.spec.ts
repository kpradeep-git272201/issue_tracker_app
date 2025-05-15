import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrowChartComponent } from './drow-chart.component';

describe('DrowChartComponent', () => {
  let component: DrowChartComponent;
  let fixture: ComponentFixture<DrowChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrowChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrowChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
