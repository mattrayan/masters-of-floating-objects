import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: [ './team.component.scss' ]
})
export class TeamComponent implements OnInit {

  public year: number = (new Date()).getFullYear();
  public teamAge: number = (new Date()).getFullYear() - 2002;

  constructor(private router: Router) { }

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

  public goToJoin(): void {
    this.router.navigate([ 'join' ]);
  }

  public goToRoster(): void {
    this.router.navigate([ 'team', 'roster' ]);
  }

  public goToAlumni(): void {
    this.router.navigate([ 'team', 'alumni' ]);
  }

}
