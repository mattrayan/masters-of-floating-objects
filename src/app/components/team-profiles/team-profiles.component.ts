import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService } from '../../services/news.service';

import { Profile } from '../../models/profiles';

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
    private news: NewsService
  ) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      this.category = url[1].path;

      if (this.category === 'roster') {
        this.profiles = this.news.getRoster();
      } else {
        this.profiles = this.news.getAlumni();
      }
    });
  }

}
