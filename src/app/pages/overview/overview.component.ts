import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {
  analytics_overview = [
    {
      image: 'school_logo_white.png',
      number: 26,
      text: 'Branches',
      background: 'bg-pri',
    },
    {
      image: 'registered_staffs.png',
      number: 56,
      text: 'Registered Staffs',
      background: 'bg-sec',
    },
    {
      image: 'registered_guards.png',
      number: 12,
      text: 'Registered Guards',
      background: 'bg-grey',
    },
  ];
}
