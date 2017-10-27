import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const splashHeight: number = $(window).height() - $('.navbar').outerHeight();
    $('.splash').height(splashHeight);
  }

}
