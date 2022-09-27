import { Component, OnInit } from '@angular/core';

export const ticketValues = [
  {
    ticketName: 'open',
    issue: 'bug in backend',
    dueDate: 'jun 17',
    priority: 'high',
    
  },
  {
    ticketName: 'open',
    issue: 'bug in backend',
    dueDate: 'jun 18',
    priority: 'low',
  
  },

  {
    ticketName: 'progress',
    issue: 'bug in backend',
    dueDate: 'jun 17',
    priority: 'low',


  },
  {
    ticketName: 'progress',
    issue: 'bug in backend',
    dueDate: 'jun 19',
    priority: 'high',
   
  },
  {
    ticketName: 'progress',
    issue: 'bug in backend',
    dueDate: 'jun 21',
    priority: 'low',
  },

  {
    ticketName: 'review',
    issue: 'bug in backend',
    dueDate: 'jun 28',
    priority: 'low',
   
  },
  {
    ticketName: 'closed',
    issue: 'bug in backend',
    dueDate: 'jun 17',
    priority: 'high',
   
  },
];

export const ticketname=['open','progress','review','closed'];

export const images = [
  {id:1, url:'../../../../assets/images/stefan-stefancik-QXevDflbl8A-unsplash.jpg'},
  {id:2, url:'../../../../assets/images/stefan-stefancik-QXevDflbl8A-unsplash.jpg'},
  {id:3, url:'../../../../assets/images/stefan-stefancik-QXevDflbl8A-unsplash.jpg'},  
]



@Component({
  selector: 'app-assigned-ticket2',
  templateUrl: './assigned-ticket2.component.html',
  styleUrls: ['./assigned-ticket2.component.scss']
})
export class AssignedTicket2Component implements OnInit {

  tickets = ticketValues;
  
  name = ticketname;

  image = images;



  constructor() { }

  ngOnInit(): void {
  }

  getTickets(name : any){
    return ticketValues.filter(
      n => n.ticketName == name
    )

  }

}
