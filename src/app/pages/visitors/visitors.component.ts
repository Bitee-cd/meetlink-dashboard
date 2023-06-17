import { Component } from '@angular/core';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css'],
})
export class VisitorsComponent {
  search: string = '';
  searchError: boolean = false;
  seacrchTypes = [
    { text: 'Checked', number: 102 },
    { text: 'Checked in ', number: 0 },
    { text: 'Checked out ', number: 0 },
    { text: 'Unexpected Visitors', number: 0 },
  ];
  visitorsHeader = [
    { text: 'Status' },
    { text: 'Check In ' },
    { text: 'Check out ' },
    { text: 'Date' },
    { text: 'Host' },
    { text: 'Visitor' },
    { text: 'Meeting ID' },
  ];
  onSearch = () => {
    if (this.search === '') {
      this.searchError = true;
      return;
    }
    console.log(this.search);
  };
}
