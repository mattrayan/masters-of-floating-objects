import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
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

  constructor(
    private router: Router,
    private news: NewsService
  ) { }

  ngOnInit() {
    $(document).ready(() => {
      this.setSplashHeight();

      $(window).resize(() => {
        this.setSplashHeight();
      });
    });

    this.getNews();
  }

  public setSplashHeight(): void {
    const splashHeight: number = $(window).height() - $('.navbar').outerHeight();
    $('.splash').height(splashHeight);
  }

  public getNews(): void {
    this.newsItems = this.news.getNews();
    console.log(this.newsItems);
  }

  public scrollToContent(): void {
    const navbarBufferHeight: number = $('.fixed-navbar-buffer').height();
    const contentPosition: number = $('#news-block').offset().top - $(window).scrollTop();

    $('html, body').animate({scrollTop: `+=${contentPosition - navbarBufferHeight}px`}, 500);
  }

  public scrollToAbout(): void {
    const navbarBufferHeight: number = $('.fixed-navbar-buffer').height();
    const contentPosition: number = $('#about-block').offset().top - $(window).scrollTop();

    $('html, body').animate({scrollTop: `+=${contentPosition - navbarBufferHeight}px`}, 500);
  }

  public goToNews(): void {
    this.router.navigate([ 'news' ]);
  }

  public goToNewsItem(id: number): void {
    this.router.navigate([ 'news', id ]);
  }

}
