import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isCollapsed = false;

  sideNavContents = [
    {
      header: 'Main',
      contentArray: [
        {
          name: 'All Tickets',
          route: 'layout/ticket/allticket',
          logo: 'bi bi-ticket-perforated'
        },
        {
          name: 'Assigned Ticket',
          route:'layout/ticket/assignedticket',
          logo: 'bi bi-ticket-detailed'
        },
        {
          name: 'WatchList',
          route: 'layout/ticket/watchList',
          logo: 'bi bi-stopwatch'
        }
      ]
    },
    {
      header: 'Account',
      contentArray: [
        {
          name: 'FAQ',
          route: 'layout/ticket/faq',
          logo: 'bi bi-question-circle'
        },
        {
          name: 'About Us',
          route: 'layout/ticket/about-us',
          logo: 'bi bi-info-circle'
        },
        {
          name: 'Logout',
          route: 'layout/ticket/logout',
          logo: 'bi bi-box-arrow-right'
        }
      ]
    }
  ];

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
