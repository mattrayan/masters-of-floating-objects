import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../services/news.service';

import { NewsItem } from '../../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: [ './news.component.scss' ]
})
export class NewsComponent implements OnInit {

  public newsItems: NewsItem[];

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  public getNews(): void {
    this.newsItems = this.news.getNews();
    console.log(this.newsItems);
  }

}
