import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupWrongComponent } from './popup-wrong.component';

describe('PopupWrongComponent', () => {
  let component: PopupWrongComponent;
  let fixture: ComponentFixture<PopupWrongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupWrongComponent]
    });
    fixture = TestBed.createComponent(PopupWrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
