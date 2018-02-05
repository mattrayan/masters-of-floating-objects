import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const fixedNavbarBuffer: HTMLElement = $('.fixed-navbar-buffer');
    const navbarHeight: number = $('.navbar').outerHeight();

    if ($(fixedNavbarBuffer).offset().top === 0) {
      $(fixedNavbarBuffer).height(navbarHeight);
      $(fixedNavbarBuffer).css('background-color', '#000000');
    }
  }

  public goToRoute(route: string): void {
    this.router.navigate([ route ]);
  }

}
