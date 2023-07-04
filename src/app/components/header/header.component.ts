import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  headerItems = [
    { path: '/overview', label: 'Settings', image: 'settings.png' },
    { path: '/visitors', label: 'Light Dark Mode', image: 'lightdark.png' },
    { path: '/members', label: 'NotificationBell', image: 'bell.png' },
  ];
  menu_list = [
    { location: 'Apo Branch' },
    { location: 'Gwarimpa 3rd Avenue' },
    { location: 'Gwarimpa 2nd Avenue' },
  ];
  showList: boolean = false;

  onShowList = () => {
    this.showList = !this.showList;
  };
}
