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
    const fixedNavbarBuffer: HTMLElement = $('.fixed-navbar-buffer');
    const navbarHeight: number = $('.navbar').outerHeight();

    if ($(fixedNavbarBuffer).offset().top === 0) {
      $(fixedNavbarBuffer).height(navbarHeight);
    }
  }

}
