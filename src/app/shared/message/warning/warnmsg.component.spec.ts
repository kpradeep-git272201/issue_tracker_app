import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnmsgComponent } from './warnmsg.component';

describe('WarnmsgComponent', () => {
  let component: WarnmsgComponent;
  let fixture: ComponentFixture<WarnmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarnmsgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarnmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
