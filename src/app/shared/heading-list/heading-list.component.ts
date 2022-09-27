import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading-list',
  templateUrl: './heading-list.component.html',
  styleUrls: ['./heading-list.component.scss']
})
export class HeadingListComponent implements OnInit {

  list = [
    {number:100, name:'open'},
    {number:30, name:'progress'},
    {number:40, name:'review'},
    {number:40, name:'closed'},
]


  constructor() { }

  ngOnInit(): void {
  }

}
