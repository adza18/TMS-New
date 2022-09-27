import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isCollapsed = true;

  sideNavContents = [
    {
      header: 'Main',
      contentArray: [
        {
          name: 'All Tickets',
          route: 'layout/ticket',
          logo: ''
        },
        {
          name: 'Assigned Ticket',
          route: '',
          logo: ''
        },
        {
          name: 'WatchList',
          route: '',
          logo: ''
        }
      ]
    },
    {
      header: 'Account',
      contentArray: [
        {
          name: 'FAQ',
          route: '',
          logo: ''
        },
        {
          name: 'About Us',
          route: '',
          logo: ''
        },
        {
          name: 'Logout',
          route: '',
          logo: ''
        }
      ]
    }
  ];

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  closeSideNav(): void {
    this.isCollapsed = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
