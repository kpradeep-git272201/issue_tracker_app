import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDialogComponentComponent } from './message-dialog-component.component';

describe('MessageDialogComponentComponent', () => {
  let component: MessageDialogComponentComponent;
  let fixture: ComponentFixture<MessageDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageDialogComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
