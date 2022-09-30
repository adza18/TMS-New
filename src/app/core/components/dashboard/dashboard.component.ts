import { Component, OnInit } from '@angular/core';
export const images = [
  {id:1, url:'../../../../assets/images/stefan-stefancik-QXevDflbl8A-unsplash.jpg'},
  {id:2, url:'../../../../assets/images/stefan-stefancik-QXevDflbl8A-unsplash.jpg'},
  {id:3, url:'../../../../assets/images/stefan-stefancik-QXevDflbl8A-unsplash.jpg'},  
]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  image = images;

  width = [55,95,65]

  constructor() { }


  

  ngOnInit(): void {
  }

}
