import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent implements OnInit {
whenClick = false;
  constructor( private router: Router ) { }

  ngOnInit() {
  }

  isFalse() {
 this.whenClick = true;
  }
  isTrue() {
 this.whenClick = false;
  }
}
