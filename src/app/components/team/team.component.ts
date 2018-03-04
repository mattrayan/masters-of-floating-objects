import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: [ './team.component.scss' ]
})
export class TeamComponent implements OnInit {

  private year: number = (new Date()).getFullYear();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goToJoin(): void {
    this.router.navigate([ 'join' ]);
  }

}
