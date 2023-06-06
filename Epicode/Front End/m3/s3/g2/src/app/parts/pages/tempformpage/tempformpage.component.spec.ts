import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempformpageComponent } from './tempformpage.component';

describe('TempformpageComponent', () => {
  let component: TempformpageComponent;
  let fixture: ComponentFixture<TempformpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempformpageComponent]
    });
    fixture = TestBed.createComponent(TempformpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
