import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCarouselComponent } from './date-carousel.component';

describe('DateCarouselComponent', () => {
  let component: DateCarouselComponent;
  let fixture: ComponentFixture<DateCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateCarouselComponent]
    });
    fixture = TestBed.createComponent(DateCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
