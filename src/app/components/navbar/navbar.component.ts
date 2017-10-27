import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const navbarHeight: number = $('.navbar').outerHeight();
    $('.fixed-navbar-buffer').height(navbarHeight);
  }

}
