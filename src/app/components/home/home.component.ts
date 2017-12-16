import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { NewsService } from '../../services/news.service';

import { NewsItem, Picture } from '../../models/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  public newsItems: NewsItem[];
  public pictures: Picture[];

  constructor(private news: NewsService) { }

  ngOnInit() {
    const splashHeight: number = $(window).height() - $('.navbar').outerHeight();
    $('.splash').height(splashHeight);

    this.getNews();
    this.getPictures();
  }

  public getNews(): void {
    this.newsItems = this.news.getNews();
    console.log(this.newsItems);
  }

  public getPictures(): void {
    this.pictures = this.news.getPictures();
    console.log(this.pictures);
  }

}
