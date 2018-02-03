import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = ' YOUR MOVIE FINDER';
  subtitle = 'Find your favourite movies in theater';
  constructor() { }

  ngOnInit() {
  }

}
