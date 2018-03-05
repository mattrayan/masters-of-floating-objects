import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: [ './team.component.scss' ]
})
export class TeamComponent implements OnInit {

  private year: number = (new Date()).getFullYear();
  private teamAge: number = (new Date()).getFullYear() - 2002;

  constructor(private router: Router) { }

  ngOnInit() {
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
