import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputtodoComponent } from './inputtodo.component';

describe('InputtodoComponent', () => {
  let component: InputtodoComponent;
  let fixture: ComponentFixture<InputtodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputtodoComponent]
    });
    fixture = TestBed.createComponent(InputtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
