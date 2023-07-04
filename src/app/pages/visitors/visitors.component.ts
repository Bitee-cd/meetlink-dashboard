import { Component } from '@angular/core';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css'],
})
export class VisitorsComponent {
  search: string = '';
  searchError: boolean = false;
  showOptions: boolean[] = [false, false, false, false, false, false, false];
  seacrchTypes = [
    { text: 'Checked', number: 102 },
    { text: 'Checked in ', number: 0 },
    { text: 'Checked out ', number: 0 },
    { text: 'Unexpected Visitors', number: 0 },
  ];
  check_options = [
    { text: 'Checked' },
    { text: 'Checked in ' },
    { text: 'Checked out ' },
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
  onShowOptions = (i: number) => {
    this.showOptions[i] = !this.showOptions[i];
    console.log(this.showOptions);
  };
}
