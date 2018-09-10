import { Component, OnInit } from '@angular/core';

import { ContentService } from '../../services/content.service';

import { News } from '../../models/content';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: [ './news.component.scss' ]
})
export class NewsComponent implements OnInit {

  public news: News[];

  constructor(private content: ContentService) { }

  ngOnInit() {
    this.content.getNews()
      .subscribe((results: News[]) => this.news = results);
  }

}
