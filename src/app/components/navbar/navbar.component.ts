import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navItems = [
    { path: '/overview', label: 'Analytics', image: 'overview.png' },
    { path: '/visitors', label: "Visitor's Logbook", image: 'visitors.png' },
    { path: '/members', label: 'Members', image: 'members.png' },
    { path: '/users', label: 'Users', image: 'users.png' },
    { path: '/meetings', label: 'Meetings', image: 'meetings.png' },
  ];
}
