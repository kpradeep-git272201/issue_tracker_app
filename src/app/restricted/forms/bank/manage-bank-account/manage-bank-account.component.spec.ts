import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBankAccountComponent } from './manage-bank-account.component';

describe('ManageBankAccountComponent', () => {
  let component: ManageBankAccountComponent;
  let fixture: ComponentFixture<ManageBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBankAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
