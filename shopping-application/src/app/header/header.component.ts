import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title= "Smart Shopping"
  logo = '../assets/images/shoplogo.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
