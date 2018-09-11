import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContentService } from '../../services/content.service';

import { Profile } from '../../models/content';

@Component({
  selector: 'app-team-profiles',
  templateUrl: './team-profiles.component.html',
  styleUrls: [ './team-profiles.component.scss' ]
})
export class TeamProfilesComponent implements OnInit {

  public category: string;
  public year: number = (new Date()).getFullYear();
  public profiles: Profile[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private content: ContentService,
  ) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      this.category = url[1].path;

      this.content.getProfiles((this.category === 'alumni'))
        .subscribe((results: Profile[]) => this.profiles = results);
    });
  }

  public getTitle(profile: Profile): string {
    if (profile.coach) {
      return 'Coach';
    } else if (profile.captain) {
      return 'Captain';
    } else if (profile.admin) {
      return 'Admin'
    } else {
      return null;
    }
  }

}
