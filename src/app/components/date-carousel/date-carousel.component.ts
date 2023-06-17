import { Component } from '@angular/core';

@Component({
  selector: 'app-date-carousel',
  templateUrl: './date-carousel.component.html',
  styleUrls: ['./date-carousel.component.css'],
})
export class DateCarouselComponent {
  currentDate: string;

  constructor() {
    // Initialize the currentDate with the current date
    const today = new Date();
    this.currentDate = this.formatDate(today);
  }

  previousDate(): void {
    const currentDate = new Date(this.currentDate);
    currentDate.setDate(currentDate.getDate() - 1);

    this.currentDate = this.formatDate(currentDate);
  }

  nextDate(): void {
    const currentDate = new Date(this.currentDate);
    currentDate.setDate(currentDate.getDate() + 1);
    this.currentDate = this.formatDate(currentDate);
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      // year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  }
}
