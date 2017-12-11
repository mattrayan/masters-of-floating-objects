import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { NewsService } from '../../services/news.service';

import { NewsItem } from '../../models/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  public newsItems: NewsItem[];

  constructor(private news: NewsService) { }

  ngOnInit() {
    const splashHeight: number = $(window).height() - $('.navbar').outerHeight();
    $('.splash').height(splashHeight);

    this.getNews();
  }

  public getNews(): void {
    this.newsItems = this.news.getNews();
    console.log(this.newsItems);
  }

}
