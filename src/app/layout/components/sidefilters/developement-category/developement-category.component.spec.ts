import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopementCategoryComponent } from './developement-category.component';

describe('DevelopementCategoryComponent', () => {
  let component: DevelopementCategoryComponent;
  let fixture: ComponentFixture<DevelopementCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopementCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopementCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
