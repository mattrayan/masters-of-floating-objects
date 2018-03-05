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

  private category: string;
  private year: number = (new Date()).getFullYear();
  private profiles: Profile[];

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
