import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd }  from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $(window).resize(() => {
      this.setContentHeight();
    });

    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.setContentHeight();
        }
      });
  }

  public setContentHeight(): void {
    const contentPageContainer: $ = $('.content-page-container')

    if (contentPageContainer.length) {
      const contentHeight: number = $(window).height() - $('.navbar').outerHeight() - $('.footer').outerHeight();
      $(contentPageContainer).css('min-height', `${contentHeight}px`);
    }
  }
}
