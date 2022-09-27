import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedTicketComponent } from './layout/assigned-ticket/assigned-ticket.component';

const routes: Routes = [
  {path:'ticket',component:AssignedTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
