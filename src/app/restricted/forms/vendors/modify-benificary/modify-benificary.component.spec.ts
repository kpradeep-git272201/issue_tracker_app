import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBenificaryComponent } from './modify-benificary.component';

describe('ModifyBenificaryComponent', () => {
  let component: ModifyBenificaryComponent;
  let fixture: ComponentFixture<ModifyBenificaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyBenificaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyBenificaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
