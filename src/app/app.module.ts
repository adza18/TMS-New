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
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartComponent } from './shared/chart/chart.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

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
    BreadcrumbComponent,
    DashboardComponent,
    ChartComponent,
    ProgressBarComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      radius:31,
      outerStrokeColor:"#53a9ff",
      outerStrokeWidth:5,
      innerStrokeWidth:0,
      animationDuration:300,
      showSubtitle:false
     
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
