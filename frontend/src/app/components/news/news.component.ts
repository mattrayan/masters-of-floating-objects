import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

import { ContentService } from '../../services/content.service';

import { News } from '../../models/content';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: [ './news.component.scss' ]
})
export class NewsComponent implements OnInit {

  public news: News[];

  constructor(
    private router: Router,
    private content: ContentService
  ) { }

  ngOnInit() {
    this.content.getNews()
      .subscribe((results: News[]) => this.news = results);
  }

  public goToNewsItem(id: number): void {
    this.router.navigate([ 'news', id ]);
  }

}
