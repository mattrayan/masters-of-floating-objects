import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: [ './team.component.scss' ]
})
export class TeamComponent implements OnInit {

  public year: number = (new Date()).getFullYear();
  public teamAge: number = (new Date()).getFullYear() - 2002;

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      this.setCoverHeight();

      $(window).resize(() => {
        this.setCoverHeight();
      });
    });
  }

  public setCoverHeight(): void {
    const coverItems: any = $('.splash-item');

    const width: number = $(coverItems[0]).width();
    $(coverItems).height(width);
  }

}
