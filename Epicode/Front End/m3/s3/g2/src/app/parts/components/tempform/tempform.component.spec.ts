import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempformComponent } from './tempform.component';

describe('TempformComponent', () => {
  let component: TempformComponent;
  let fixture: ComponentFixture<TempformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempformComponent]
    });
    fixture = TestBed.createComponent(TempformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
