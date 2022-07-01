import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  public color = "green";

  constructor() { }

  ngOnInit(): void {
  }

  public mouseHover() {
    this.color = "white"
  }
  
  public mouseHoverLeave () {
    this.color = "green"
  }

}
