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
  selector: 'app-assigned-ticket',
  templateUrl: './assigned-ticket.component.html',
  styleUrls: ['./assigned-ticket.component.scss']
})
export class AssignedTicketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tickets = ticketValues;
  
  name = ticketname;

  image = images;


  getTickets(name : any){
    return ticketValues.filter(
      n => n.ticketName == name
    )

  }
  open(n:any){
    if(n=='open'){
      return this.openTickets;
    }
    if(n=='review'){
      return this.reviewTickets;
    } 
    if(n=='closed'){
      return this.closedTickets;
    } 
    if(n=='progress'){
      return this.progressTickets;
    }
    else {
      return "invalid";
    }
  }



  openTickets = ticketValues.filter(
    n => n.ticketName == 'open'
  )
  progressTickets = ticketValues.filter(
    n => n.ticketName == 'progress'
  )  
  reviewTickets = ticketValues.filter(
    n => n.ticketName == 'review'
  )
  closedTickets = ticketValues.filter(
    n => n.ticketName == 'closed'
  )
  


}
