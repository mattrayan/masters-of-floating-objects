import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
    this.setContentHeight();

    $(window).resize(() => {
      this.setContentHeight();
    });

    this.getNews();
  }

  public setContentHeight(): void {
    const contentHeight: number = $(window).height() - $('.navbar').outerHeight() - $('.footer').outerHeight();
    $('.news-page').css('min-height', `${contentHeight}px`);
  }

  public getNews(): void {
    this.newsItems = this.news.getNews();
    console.log(this.newsItems);
  }

}
