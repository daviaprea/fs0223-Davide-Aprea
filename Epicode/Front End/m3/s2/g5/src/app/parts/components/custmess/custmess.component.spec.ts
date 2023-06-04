import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmessComponent } from './custmess.component';

describe('CustmessComponent', () => {
  let component: CustmessComponent;
  let fixture: ComponentFixture<CustmessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustmessComponent]
    });
    fixture = TestBed.createComponent(CustmessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
