import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactformpageComponent } from './reactformpage.component';

describe('ReactformpageComponent', () => {
  let component: ReactformpageComponent;
  let fixture: ComponentFixture<ReactformpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactformpageComponent]
    });
    fixture = TestBed.createComponent(ReactformpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
