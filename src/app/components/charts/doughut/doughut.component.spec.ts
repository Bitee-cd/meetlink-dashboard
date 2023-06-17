import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughutComponent } from './doughut.component';

describe('DoughutComponent', () => {
  let component: DoughutComponent;
  let fixture: ComponentFixture<DoughutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoughutComponent]
    });
    fixture = TestBed.createComponent(DoughutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
