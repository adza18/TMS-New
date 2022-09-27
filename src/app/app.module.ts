import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FormComponent } from './shared/form/form.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { AssignedTicketComponent } from './layout/assigned-ticket/assigned-ticket.component';
import { AddInputComponent } from './shared/add-input/add-input.component';
import { AllTicketsTableComponent } from './layout/all-tickets-table/all-tickets-table.component';
import { AssignedTicket2Component } from './layout/assigned-ticket2/assigned-ticket2.component';
import { HeadingListComponent } from './shared/heading-list/heading-list.component';
import { NavComponent } from './core/components/nav/nav.component';
import { LoginComponent } from './core/components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    SearchBarComponent,
    AssignedTicketComponent,
    AddInputComponent,
    AllTicketsTableComponent,
    AssignedTicket2Component,
    HeadingListComponent,
    NavComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
