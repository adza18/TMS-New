import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTicketsTableComponent } from './layout/all-tickets-table/all-tickets-table.component';
import { AssignedTicketComponent } from './layout/assigned-ticket/assigned-ticket.component';
import { AssignedTicket2Component } from './layout/assigned-ticket2/assigned-ticket2.component';
import { FormComponent } from './shared/form/form.component';

const routes: Routes = [
  {path:'layout/ticket/about-us',component:AssignedTicketComponent},
  {path:'layout/ticket/allticket',component:AllTicketsTableComponent},
  {path:'layout/ticket/assignedticket',component:AssignedTicket2Component},
  {path:'layout/ticket/faq',component:FormComponent},
  {path:'layout/ticket/watchList',component:AssignedTicketComponent},
  {path:'layout/ticket/logout',component:AssignedTicketComponent},
  // {path:'ticket',component:AssignedTicketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
