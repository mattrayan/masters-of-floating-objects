import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService } from '../../services/news.service';

import { NewsItem } from '../../models/news';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: [ './news-item.component.scss' ]
})
export class NewsItemComponent implements OnInit {

  public item: NewsItem;

  constructor(
    private news: NewsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      let id: number;

      if (url.length == 2) {
        id = parseInt(url[1].path);
        this.getNewsItem(id);
      }
    });
  }

  public getNewsItem(id: number): void {
    this.item = this.news.getNewsItem(id);
    console.log(this.item);
  }

}
