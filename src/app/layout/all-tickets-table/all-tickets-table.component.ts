import { Component, OnInit } from '@angular/core';

export const ticketList = [
  {
    sNo: 1,
    createdDate: '2022-10-10',
    ticketID: 123456,
    project: 'wallet',
    status: 'new ticket',
    action: 'action',
  },
  {
    sNo: 1,
    createdDate: '2022-10-10',
    ticketID: 123456,
    project: 'wallet',
    status: 'completed',
    action: 'action',
  },
  {
    sNo: 1,
    createdDate: '2022-10-10',
    ticketID: 123456,
    project: 'wallet',
    status: 'new ticket',
    action: 'action',
  },
  {
    sNo: 1,
    createdDate: '2022-10-10',
    ticketID: 123456,
    project: 'wallet',
    status: 'new ticket',
    action: 'action',
  },
  {
    sNo: 1,
    createdDate: '2022-10-10',
    ticketID: 123456,
    project: 'wallet',
    status: 'pending',
    action: 'action',
  },
  {
    sNo: 1,
    createdDate: '2022-10-10',
    ticketID: 123456,
    project: 'wallet',
    status: 'completed',
    action: 'action',
  },
  {
    sNo: 1,
    createdDate: '2022-10-10',
    ticketID: 123456,
    project: 'wallet',
    status: 'pending',
    action: 'action',
  }
];


@Component({
  selector: 'app-all-tickets-table',
  templateUrl: './all-tickets-table.component.html',
  styleUrls: ['./all-tickets-table.component.scss']
})
export class AllTicketsTableComponent implements OnInit {

  ticketListTable = ticketList 
  constructor() { }

  ngOnInit(): void {
  }

}
